import { useParams } from "react-router-dom";

export function CardDetail() {
  let params = useParams();
  return <h2>Card {params.prdNo}</h2>;
}
