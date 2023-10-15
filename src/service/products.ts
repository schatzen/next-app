// 공통된 데이터가 여러 모듈에서 필요하므로 데이터를 불러오는 함수를 따로 맏든다. (service/api/manage 등)
export const getProducts = () => {
  return ["top", "skirt", "pants", "dress"];
};

export const getProduct = (id: string) => {
  return "dress";
};
