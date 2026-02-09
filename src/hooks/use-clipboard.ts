import { useState, useCallback } from 'react';

type ClipboardStatus = 'idle' | 'copying' | 'success' | 'error';

interface UseClipboardReturn {
  status: ClipboardStatus;
  isCopying: boolean;
  copy: (text: string) => Promise<void>;
  reset: () => void;
}

export function useClipboard(timeout = 2000): UseClipboardReturn {
  const [status, setStatus] = useState<ClipboardStatus>('idle');

  const copy = useCallback(
    async (text: string) => {
      try {
        setStatus('copying');

        // Try modern Clipboard API first
        if (navigator?.clipboard) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for non-secure contexts (HTTP)
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();

          const successful = document.execCommand('copy');
          document.body.removeChild(textArea);

          if (!successful) {
            throw new Error('Fallback copy failed');
          }
        }

        setStatus('success');

        // auto-reset to idle after timeout
        setTimeout(() => {
          setStatus('idle');
        }, timeout);
      } catch (err) {
        console.error('Clipboard error:', err);
        setStatus('error');

        // Reset to idle after showing error
        setTimeout(() => {
          setStatus('idle');
        }, timeout);
      }
    },
    [timeout],
  );

  const reset = useCallback(() => {
    setStatus('idle');
  }, []);

  return {
    status,
    isCopying: status === 'copying',
    copy,
    reset,
  };
}
