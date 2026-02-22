import './styles/index.css';
import { initPromise } from './i18n';
import { createRoot } from 'react-dom/client';
import AppProviders from './app';

const root = createRoot(document.getElementById('root')!);

/**
 * Wait for i18n to be fully initialised (language detected, translations loaded)
 * before mounting React. Combined with the synchronous inline script in
 * index.html that sets dir/lang immediately, this guarantees zero layout
 * flicker on hard refresh — even for RTL languages.
 *
 * `.finally()` ensures the app still renders if translation fetching fails;
 * i18next will fall back to keys / fallbackLng gracefully.
 */
initPromise.finally(() => {
  root.render(<AppProviders />);
});
