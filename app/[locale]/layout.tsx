import type { Metadata } from "next";
import Script from "next/script";
import {NextIntlClientProvider} from 'next-intl';
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../../public/css/datepicker.css";

type Params = Promise<{ locale: string }>;

export const metadata: Metadata = {
  title: "The Kitchen",
  description: "Một không gian ẩm thực Việt giữa lòng sân bay, nơi mỗi vị khách đều được chào đón trước mỗi hành trình",
  alternates: {
    canonical: "https://localhost:3000",
  },
  keywords: [
    "bánh mì",
    "bánh bao",
    "html5",
    "restaurant",
    "template",
    "food",
    "reservation",
  ],
  authors: [{ name: "Surjith S M" }],
};

export default async function RootLayout({children, params}: {children: React.ReactNode, params: Params}) {
  const {locale} = await params;
  let messages;
  try {
    messages = await getMessages({locale});
  } catch {
    notFound();
  }
  return (
    <>
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <title>The Kitchen</title>
        <meta name="viewport" content="width=device-width" />

        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome/css/font-awesome.css" />
        <link rel="stylesheet" href="/css/plugin.css" />
        <link rel="stylesheet" href="/css/main.css" />
      </head>
      <body>
        <NextIntlClientProvider  locale={locale} messages={messages}>{children}
        <Script src="/js/vendor/jquery-1.11.2.min.js" ></Script>
        <Script src="/js/vendor/bootstrap.min.js"></Script>
        <Script src="/js/vendor/jquery.flexslider-min.js"></Script>
        <Script src="/js/vendor/spectragram.js"></Script>
        <Script src="/js/vendor/owl.carousel.min.js"></Script>
        <Script src="/js/vendor/velocity.min.js"></Script>
        <Script src="/js/vendor/velocity.ui.min.js"></Script>
        {/* <Script src="/js/vendor/bootstrap-datepicker.min.js"></Script> */}
        <Script src="/js/vendor/bootstrap-clockpicker.min.js"></Script>
        <Script src="/js/vendor/jquery.magnific-popup.min.js"></Script>
        <Script src="/js/vendor/isotope.pkgd.min.js"></Script>
        <Script src="/js/vendor/slick.min.js"></Script>
        <Script src="/js/vendor/wow.min.js"></Script>
        <Script src="/js/animation.js"></Script>
        {/* <Script src="/js/vendor/vegas/vegas.min.js"></Script> */}
        <Script src="/js/vendor/jquery.mb.YTPlayer.js"></Script>
        <Script src="/js/vendor/jquery.stellar.js"></Script>
        <Script src="/js/vendor/mc/jquery.ketchup.all.min.js"></Script>
        <Script src="/js/vendor/mc/main.js"></Script>
        <Script src="/js/vendor/validate.js"></Script>
        <Script src="/js/reservation.js"></Script>
        <Script src="/js/main.js"></Script>
        </NextIntlClientProvider>
      </body>
    </html>
    </>
  );
}
