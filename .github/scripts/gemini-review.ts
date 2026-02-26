import { GoogleGenerativeAI } from '@google/generative-ai';
import { execSync } from 'child_process';
import fs from 'fs';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

// Allowed extensions
const ALLOWED_EXT = ['.ts', '.tsx', '.js'];

function getChangedFiles() {
  const files = execSync('git diff --name-only origin/${GITHUB_BASE_REF}')
    .toString()
    .split('\n')
    .filter(Boolean);

  return files.filter((file) => {
    if (file === 'package-lock.json') return false;
    return ALLOWED_EXT.some((ext) => file.endsWith(ext));
  });
}

async function reviewFile(file: string) {
  const diff = execSync(
    `git diff origin/${process.env.GITHUB_BASE_REF} -- ${file}`,
  ).toString();

  if (!diff.trim()) return null;

  const prompt = `
You are a senior backend/frontend engineer.

Review ONLY the changed lines in this file diff.
Give concise and actionable feedback.

Focus on:
- Bugs
- Performance
- Security
- Code quality

File: ${file}

Diff:
${diff}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return `## 📂 ${file}\n\n${response.text()}\n\n---\n`;
}

async function run() {
  const files = getChangedFiles();

  if (!files.length) {
    fs.writeFileSync('review.txt', 'No relevant JS/TS files changed.');
    return;
  }

  let fullReview = '# 🤖 Gemini Code Review\n\n';

  for (const file of files) {
    const review = await reviewFile(file);
    if (review) {
      fullReview += review;
    }
  }

  fs.writeFileSync('review.txt', fullReview);
}

run();
