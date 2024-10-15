import data from './data';
import FlashCard from './FlashCard';

const FlashCardList = () => {
    const cards = data;

    return (
        <>
            <div className="cards">
                {cards.map((card) => (
                    <FlashCard question={card.question} answer={card.answer}  />
                ))}
            </div>
        </>
    );
}

export default FlashCardList;