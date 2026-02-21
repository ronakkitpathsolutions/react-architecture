import ICONS from '@/assets/icons';
import { APP_TITLE, USER_ROLES } from '@/utils/constants';

const AUTH_ROUTES = {
  layout: {},
  login: {
    path: '/login',
    title: 'Login',
  },
  register: {
    path: '/register',
    title: 'Register',
  },
  forgot_password: {
    path: '/forgot-password',
    title: 'Forgot Password',
  },
  reset_password: {
    path: '/reset-password',
    title: 'Reset Password',
  },
};

const GENERAL_ROUTES = {
  ui_kit: {
    path: '/ui-kit',
    title: 'UI Kit',
  },
  error_boundary: {
    path: '/error-boundary',
    title: 'Error Boundary',
  },
};

const WEB_ROUTES = {
  layout: {},
  landing: {
    path: '/',
    title: APP_TITLE,
  },
  privacy_policy: {
    path: '/privacy-policy',
    title: 'Privacy Policy',
  },
  terms_of_service: {
    path: '/terms-of-service',
    title: 'Terms of Service',
  },
};

const ADMIN_ROUTES = {
  layout: {},
  dashboard: {
    path: '/dashboard',
    title: 'Dashboard',
    url: '/dashboard',
    roles: Object.values(USER_ROLES),
    icon: ICONS.Home,
  },
  profile: {
    path: '/profile',
    title: 'Profile',
    url: '/profile',
    roles: Object.values(USER_ROLES),
  },
  user_management: {
    path: '/user-management',
    title: 'Users',
    url: '/user-management',
    roles: [USER_ROLES.ADMIN],
    icon: ICONS.Users,
  },
  product_management: {
    path: '/product-management',
    title: 'Products',
    url: '/product-management',
    roles: [USER_ROLES.ADMIN],
  },
};

const ROUTE_ITEMS = [
  { ...ADMIN_ROUTES.dashboard },
  { ...ADMIN_ROUTES.user_management },
  { ...ADMIN_ROUTES.product_management },
];

export { AUTH_ROUTES, WEB_ROUTES, ADMIN_ROUTES, ROUTE_ITEMS, GENERAL_ROUTES };
