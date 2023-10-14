import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

export default function PantsPage({ params }: Props) {
  if (params.slug == "nothing") {
    notFound();
  }
  return <h1>{params.slug} 소개 페이지 😘</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((products) => ({
    slug: products,
  }));
}
