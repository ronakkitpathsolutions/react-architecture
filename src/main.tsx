import { createRoot } from 'react-dom/client';
import './styles/index.css';
import AppProviders from './app';

createRoot(document.getElementById('root')!).render(<AppProviders />);
