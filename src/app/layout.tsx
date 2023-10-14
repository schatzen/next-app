import "./globals.css";
import style from "./layout.module.css";

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
            <a>About</a>
            <a>Contact</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
