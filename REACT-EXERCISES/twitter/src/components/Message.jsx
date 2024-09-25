const Message = ({ name, message }) => {
    return (
        <>
            <div className="container">
                <h2>@{name}</h2>
                <div className="text">
                    <p>{message}</p>
                </div>
            </div>
        </>
    );
};

export default Message;