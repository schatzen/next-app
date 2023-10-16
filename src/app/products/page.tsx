import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";
import { MeowArticle } from "@/components/MeowArticle/MeowArticle";

/**
 * 서버 컴포넌트는 async 함수로 정의 가능
 */
export default async function ProductsPage() {
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

      <MeowArticle />
    </>
  );
}
