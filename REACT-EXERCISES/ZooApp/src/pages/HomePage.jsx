import Card from '../components/Card';
import animals from '../animals.js';

const HomePage = () => {
    return (
        <section className='homepage__section'>
            <h1>Zoo App</h1>
            <div className="animals">
                {animals.map((animal) => (
                    <Card key={animal.id} animal={animal} />
                ))}
            </div>




        </section>
    );
}

export default HomePage;