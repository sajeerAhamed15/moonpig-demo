import { Grid, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomCard } from "../../Components/CustomCard";
import { Product } from "../../Interfaces/types";
import { getCardByPage } from "../../Services/cardApi";
import Button from "@mui/material/Button";
import LinearProgress from '@mui/material/LinearProgress';

import "./styles.scss";

export function Home() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
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
  }, [ pageIndex ]);

  const loadMore = () => {
    setPageIndex(pageIndex + 1);
  };

  return (
    <div className="home" style={{ margin: isMobile ? 5 : 40 }}>
      <Grid container spacing={3}>
        {cards &&
          cards.map((card: Product, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <CustomCard product={card} />
              </Grid>
            );
          })}
      </Grid>
      <div className="button-wrapper">
        <Button onClick={loadMore} size="small" variant="outlined">
          Load More
        </Button>
      </div>
      {!loading && <LinearProgress className="loader"/>}
    </div>
  );
}
