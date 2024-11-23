import type {Metadata} from "next";
import '@picocss/pico/css/pico.min.css';
import './styles/layout.css';
import './styles/override.css';
import Header from "@/app/header";
import React from "react";
import {Public_Sans} from "next/font/google";
import GradientScroll from "@/app/components/gradientScroll";

const mainFont = Public_Sans({
  weight: "400",
  preload: false,
})

export const metadata: Metadata = {
  title: "Evan Mulrooney - Software Developer - Toronto, ON",
  description: "Portfolio webpage.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${mainFont.className} container layout`}>
      <GradientScroll></GradientScroll>
      <Header></Header>
      <main>
        {children}
      </main>
      </body>
    </html>
  );
}
