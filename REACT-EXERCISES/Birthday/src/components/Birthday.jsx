const Birthday = ({ name, age, image }) => {
    return (
        <div className="birthday__container">
            <img src={image} alt="" />
            <div className="birthday__intel">
                <h2>{name}</h2>
                <p>{age} years</p>
            </div>
        </div>
    );
}

export default Birthday;