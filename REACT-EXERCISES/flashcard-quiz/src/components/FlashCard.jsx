import { useState } from 'react';
const FlashCard = ({ question, answer }) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <>
            <article onClick={flipCard}>
                {!isFlipped ?
                    <h2>{question}</h2>
                    :
                    <h3>{answer}</h3>
                }
            </article>
        </>
    );
}

export default FlashCard;