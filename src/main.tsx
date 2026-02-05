import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app';
import AppProviders from '@/providers';

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
