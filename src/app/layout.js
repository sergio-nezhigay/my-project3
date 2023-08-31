import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
        <meta name="next-size-adjust" content="try" key="desc" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
