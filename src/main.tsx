import { createRoot } from 'react-dom/client';
import './styles/index.css';
import AppProviders from './app';
import { GlobalErrorBoundary } from '@/components/error-boundary';

createRoot(document.getElementById('root')!).render(
  <GlobalErrorBoundary>
    <AppProviders />
  </GlobalErrorBoundary>,
);
