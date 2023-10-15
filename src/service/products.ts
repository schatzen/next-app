import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: string;
};

// 공통된 데이터가 여러 모듈에서 필요하므로 데이터를 불러오는 함수를 따로 맏든다. (service/api/manage 등)
export const getProducts = async (): Promise<Product[]> => {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
  const products = await getProducts();
  const product = products.find((item) => item.id === id);
  return product;
};
