import { useNavigate, useParams } from "react-router-dom";
import products from "../products";

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((prod) => prod.id == Number(id))

    if (!product) {
        return <h2>Product niet gevonden!</h2>
    }

    return (
        <section>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <button onClick={() => navigate(-1)}>Terug</button>
        </section>
    );
}

export default ProductDetailPage;