import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

import { useParams } from "react-router-dom";
import { ImageUrl, SingleCard } from "../../Interfaces/types";
import { getSingleCard } from "../../Services/cardApi";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.scss";

export function CardDetail() {
  let params = useParams();
  const [singleCard, setSingleCard] = useState<SingleCard | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const prdNo = params.prdNo;
    if (prdNo) {
      setLoading(true);
      getSingleCard(prdNo).then((data: any) => {
        const card = data as SingleCard;
        setSingleCard(card);
        setLoading(false);
      });
    }
  }, [params]);

  return (
    <div className="card-detail">
      {!loading && singleCard && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <Carousel>
                {singleCard.ImageUrls.map((image: ImageUrl) => {
                  return (
                    <div>
                      <img src={image.ImageUrl} alt={singleCard.Description} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              className="title"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {singleCard.Title}
            </Typography>
            <Typography
              className="subTitle"
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              {singleCard.AdditionalInfo}
            </Typography>
            <Typography className="subTitle" variant="body2">
              {singleCard.Description}
            </Typography>

            <div className="button-wrapper">
            <Button size="small" variant="contained">
              ADD TO BASKET
            </Button>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
