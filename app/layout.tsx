import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian | Portfolio",
  description:
    "Brian is a full-stack developer based in the Kenya. He specializes in building web applications using modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`{inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem]
        h-[31.5rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] left-[35rem]
        h-[31.5rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
