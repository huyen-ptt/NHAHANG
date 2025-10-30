import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Kitchen",
  description: "The Kitchen fresh and fast. Khởi đầu hành trình của bạn với tinh hoa ẩm thực Việt",
   alternates: {
    canonical: "https://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
