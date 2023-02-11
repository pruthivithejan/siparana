"use client";
import theme from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";

// Component Imports
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tabs from "@/components/Tabs";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Hero />
          <Tabs />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
