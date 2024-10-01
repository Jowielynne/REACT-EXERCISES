const Message = ({ name, message }) => {
    return (
        <>
        <div className="container"> 
            <h2>@{name}</h2>
            <p>{message}</p>
        </div>
        </>
    );
};

export default Message;