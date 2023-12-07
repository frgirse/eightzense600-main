import config from "@/config/config.json";
import theme from "@/config/theme.json";
import TwSizeIndicator from "@/helpers/TwSizeIndicator";
import Footer from "@/partials/Footer";
import Providers from "@/partials/Providers";
import "@/styles/main.scss";
import "./globals.css"
//import {NextAuthProvider} from"./providers";
import { ClerkProvider } from '@clerk/nextjs'

import Header from"../layouts/partials/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  return (
    <ClerkProvider>
    <html suppressHydrationWarning={true} lang="en">
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* favicon */}
        <link rel="shortcut icon" href={config.site.favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="nextplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />
      </head>                                                                                                                                                             <body className="bg-[#2A2B2A] bg-[url('/images/gitter.svg')]  bg-repeat"  suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Providers>
          <Header />
          <main className="">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}





