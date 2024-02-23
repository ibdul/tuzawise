"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head>

        <link rel="stylesheet" href="https://cdn-chatbot.autogon.ai/style.css" />
        <script src="https://cdn-chatbot.autogon.ai/index.min.js" defer></script>
        <script>
          let CHAT_AGENT_ID = 145e8f3f-2d39-4174-8c90-b05961d9b6b8
        </script>
      </head>

      {/* <head /> */}

      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <ToasterContext />
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
