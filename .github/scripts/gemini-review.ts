import { GoogleGenAI } from '@google/genai';
import { execSync } from 'child_process';
import fs from 'fs';

// The new SDK automatically picks up GEMINI_API_KEY from process.env
const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Use Gemini 3.1 Pro for high-quality code review
const modelName = 'gemini-3.1-pro-preview';

const ALLOWED_EXT = ['.ts', '.tsx', '.js'];

function getChangedFiles() {
  const baseRef = process.env.GITHUB_BASE_REF || 'main';
  const files = execSync(`git diff --name-only origin/${baseRef}`)
    .toString()
    .split('\n')
    .filter(Boolean);

  return files.filter((file) => {
    if (file === 'package-lock.json') return false;
    return ALLOWED_EXT.some((ext) => file.endsWith(ext));
  });
}

async function reviewFile(file: string) {
  const baseRef = process.env.GITHUB_BASE_REF || 'main';
  const diff = execSync(`git diff origin/${baseRef} -- ${file}`).toString();

  if (!diff.trim()) return null;

  const prompt = `
You are a senior engineer. Review ONLY the changed lines in this diff.
Focus on bugs, performance, and security.

File: ${file}
Diff:
${diff}`;

  const result = await client.models.generateContent({
    model: modelName,
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
  });

  return `## 📂 ${file}\n\n${result.text}\n\n---\n`;
}

async function run() {
  const files = getChangedFiles();
  if (!files.length) {
    fs.writeFileSync('review.txt', 'No relevant JS/TS files changed.');
    return;
  }

  let fullReview = '# 🤖 Gemini 3.1 Code Review\n\n';
  for (const file of files) {
    try {
      const review = await reviewFile(file);
      if (review) fullReview += review;
    } catch (e) {
      console.error(`Error reviewing ${file}:`, e);
    }
  }
  fs.writeFileSync('review.txt', fullReview);
}

run();
