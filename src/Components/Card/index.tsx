import { useNavigate } from "react-router-dom";
import { Product } from "../../Interfaces/types";

export function Card(props: {product: Product}) {
    const navigate = useNavigate();
    const { product } = props;

    return (
        <button onClick={() => navigate(`/card/${product.MoonpigProductNo}`)}>Card {product.MoonpigProductNo}</button>
    )
}