import { Metadata } from "next";
import "./globals.css";
import style from "./layout.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품들을 제공하는 사이트입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={style.header}>
          <h1>Next App</h1>
          <nav className={style.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
