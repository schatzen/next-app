import style from "./layout.module.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={style.nav}>
        <a>여성옷</a>
        <a>남성옷</a>
      </nav>
      <section className={style.section}>{children}</section>
    </>
  );
}
