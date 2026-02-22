import type translation from '../../public/locales/en/translation.json';
import type common from '../../public/locales/en/common.json';
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof translation;
      common: typeof common;
    };
  }
}
