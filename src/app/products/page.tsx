import Link from "next/link";

const itemList = ["top", "skirt", "pants", "dress"];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {itemList.map((item) => (
          <li key={item}>
            <Link href={`products/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
