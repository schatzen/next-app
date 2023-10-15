import { getProducts } from "@/service/products";
import Link from "next/link";

export default function ProductsPage() {
  // 서버 파일 (데이터 베이스)에 있는 제품의 리스트를 읽어와서 그것을 보여줌
  const products = getProducts();
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map((item) => (
          <li key={item}>
            <Link href={`products/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
