import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "The Canvas — Whitelist Checker",
  description: "Check your eligibility",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&family=Pacifico+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans bg-canvas text-white`}>
        {children}
      </body>
    </html>
  );
}
