import { useNavigate } from 'react-router-dom'

const Card = ({ animal }) => {

    const navigate = useNavigate();

    function goToDetail() {
        navigate(`/animals/${animal.id}`)
    }

    return (
        <>
            <section className='animal__Container' onClick={goToDetail}>
                <img src={animal.image} alt="" />
                <h2>{animal.name}</h2>
            </section>

        </>
    );
}

export default Card;