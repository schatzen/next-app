import { Metadata } from "next";
import style from "./layout.module.css";

export const metadata: Metadata = {
  title: "product 페이지",
  description: "product 페이지 입니다.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={style.nav}>
        <a href="/products/woman">여성옷</a>
        <a href="/products/man">남성옷</a>
      </nav>
      <section className={style.section}>{children}</section>
    </>
  );
}
