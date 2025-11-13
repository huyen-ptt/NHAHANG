import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Các locale được hỗ trợ
  locales: ['en', 'vi', 'ru', 'zh'],

  // Locale mặc định
  defaultLocale: 'vi',
});

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|robots.txt|manifest.json|.*\\..*).*)'],
};
