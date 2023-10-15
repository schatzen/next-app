import { getProducts } from "@/service/products";
import Link from "next/link";

/**
 * 서버 컴포넌트는 async 함수로 정의 가능
 */
export default async function ProductsPage() {
  // 서버 파일 (데이터 베이스)에 있는 제품의 리스트를 읽어와서 그것을 보여줌
  const products = await getProducts();
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
