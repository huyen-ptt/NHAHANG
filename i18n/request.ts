import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const supportedLocales = ['en', 'vi', 'ja'];
  const currentLocale = supportedLocales.includes(locale ?? '')
    ? locale!
    : 'en';

  return {
    locale: currentLocale,
    messages: (await import(`../dictionaries/${currentLocale}.json`)).default,
  };
});
