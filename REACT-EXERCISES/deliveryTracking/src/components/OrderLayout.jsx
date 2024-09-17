const OrderLayout = ({ city, orderID, status }) => {
    return (
        <>
            <article>
                <button>{status}</button>
                <h2>Package From {city}</h2>
                <h3>Order ID #14389-{orderID}</h3>
            </article>
        </>
    );
}

export default OrderLayout;