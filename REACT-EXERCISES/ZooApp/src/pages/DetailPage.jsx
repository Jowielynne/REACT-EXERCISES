import { useNavigate, useParams } from "react-router-dom";
import animals from "../animals";

const DetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const animal = animals.find((anim) => anim.id == Number(id))

    if (!animal) {
        return <h2>Dier niet gevonden!</h2>
    }

    return (
        <section className="animal__Card">
            <img src={animal.image} alt="" />
            <h2>{animal.name}</h2>
            <h3>Leefomgeving: {animal.habitat}</h3>
            <h4>Dieet: {animal.diet}</h4>
            <p>Beschrijving: {animal.description}</p>
            <button onClick={() => navigate(-1)}>Terug</button>
        </section>
    );
}

export default DetailPage;