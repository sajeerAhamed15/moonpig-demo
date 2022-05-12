import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Product } from "../../Interfaces/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Rating from "@mui/material/Rating";
import "./styles.scss";

export function CustomCard(props: { product: Product }) {
  const navigate = useNavigate();
  const { product } = props;

  return (
    <div className="custom-card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <LazyLoadImage
            className="image"
            effect="blur"
            src={product.ProductImage.Link.Href}
          />
          <Typography
            className="title"
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {product.Title}
          </Typography>
          <Typography
            className="subTitle"
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            {product.Price.Currency + product.Price.Value}
          </Typography>
          <Rating
            precision={0.1}
            name="size-small"
            defaultValue={product.Reviews.AverageStarReviewRating}
            size="small"
          />
        </CardContent>
        <CardActions>
          <div className="button-wrapper">
            <Button
              size="small"
              onClick={() => navigate(`/card/${product.MoonpigProductNo}`)}
            >
              VIEW MORE
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
