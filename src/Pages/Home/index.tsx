import { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { Product } from "../../Interfaces/types";
import { getCardByPage } from "../../Services/cardApi";

export function Home() {
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [cards, setCards] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    getCardByPage(pageIndex).then((data: any) => {
      const allCards = data as Product[];
      setCards([...cards, ...allCards]);
      setLoading(false);
    });
  }, [pageIndex]);

  return (
    <div>
      {!loading &&
        cards.map((card: Product) => {
          return <Card product={card} />;
        })}
    </div>
  );
}
