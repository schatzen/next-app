import { getProducts } from "@/service/products";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품의 이름 : ${slug}`,
  };
}

export default function PantsPage({ params: { slug } }: Props) {
  if (!slug) {
    notFound();
  }

  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그것을 보여줌
  return <h1>{slug} 소개 페이지 😘</h1>;
}

export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = getProducts();
  return products.map((products) => ({
    slug: products,
  }));
}
