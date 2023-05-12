import "./globals.css";
import localFont from "next/font/local";

// Component imports
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Yaldevi = localFont({
  src: [
    {
      path: "../public/fonts/Yaldevi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Yaldevi-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Yaldevi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Yaldevi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Yaldevi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Yaldevi-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Yaldevi.className}>
      <body>
        <Navbar />
        <Hero />
        {children}
      </body>
    </html>
  );
}
