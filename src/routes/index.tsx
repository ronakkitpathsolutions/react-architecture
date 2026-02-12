import { createBrowserRouter } from 'react-router';

// This is the public routes for web, you can add more routes here
import Home from '@/pages/web/home';
import PrivacyPolicy from '@/pages/web/privacy-policy';
import TermsOfServices from '@/pages/web/terms-of-services';

// This is the common UI component for all pages
import UiKit from '@/pages/web/ui-kit';

// Authentication routes
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import ForgotPassword from '@/pages/auth/forgot-password';

// This is the admin routes, you can add more routes here
import Dashboard from '@/pages/admin/dashboard';
import UserManagement from '@/pages/admin/user-management';
import ProductManagement from '@/pages/admin/product-management';
import Profile from '@/pages/admin/profile';

// Layouts for different route groups
import PublicLayout from '@/layouts/public-layout';
import WebLayout from '@/layouts/web-layout';
import AdminLayout from '@/layouts/admin-layout';
import AuthLayout from '@/layouts/auth-layout';

import {
  ADMIN_ROUTES,
  AUTH_ROUTES,
  GENERAL_ROUTES,
  WEB_ROUTES,
} from './routes';

// Loaders and Redirection is Remaining

const router = createBrowserRouter([
  {
    Component: PublicLayout,
    children: [{ ...GENERAL_ROUTES.ui_kit, Component: UiKit }],
  },
  {
    ...WEB_ROUTES.layout,
    Component: WebLayout,
    children: [
      { ...WEB_ROUTES.landing, Component: Home },
      { ...WEB_ROUTES.privacy_policy, Component: PrivacyPolicy },
      { ...WEB_ROUTES.terms_of_service, Component: TermsOfServices },
    ],
  },
  {
    ...AUTH_ROUTES.layout,
    Component: AuthLayout,
    children: [
      { ...AUTH_ROUTES.login, Component: Login },
      { ...AUTH_ROUTES.register, Component: Register },
      { ...AUTH_ROUTES.forgot_password, Component: ForgotPassword },
    ],
  },
  {
    ...ADMIN_ROUTES.layout,
    Component: AdminLayout,
    children: [
      { ...ADMIN_ROUTES.dashboard, Component: Dashboard },
      { ...ADMIN_ROUTES.profile, Component: Profile },
      { ...ADMIN_ROUTES.user_management, Component: UserManagement },
      { ...ADMIN_ROUTES.product_management, Component: ProductManagement },
    ],
  },
]);

export default router;
