import { AllCards, Product, SingleCard } from "../Interfaces/types";

export async function getCardByPage(pageNumber: number) {
  const pageSize = 30;

  const response = await fetch(
    "https://moonpig.github.io/tech-test-frontend/search.json"
  ).then((response) => response.json());

  const data = response as AllCards;
  const allProducts: Product[] = data.Products;

  if (data.NumberOfProducts < pageNumber * pageSize) {
    return [];
  }

  const products: Product[] = allProducts.slice(
    pageNumber * pageSize,
    (pageNumber + 1) * pageSize
  );

  return products;
}

export async function getSingleCard(prdNo: string) {
  const response = await fetch(
    `https://www.moonpig.com/uk/api/product/product/?mpn=${prdNo}`
  ).then((response) => response.json());

  return response as SingleCard;
}
