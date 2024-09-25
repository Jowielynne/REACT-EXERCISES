const ToDo = ({ item }) => {
    return (
        <>
            <div className="container">
                <p>{item}</p>
                <div className="buttons">
                    <button className="check">✓</button>
                    <button className="delete">✗</button>
                </div>
            </div>
        </>
    );
};

export default ToDo;