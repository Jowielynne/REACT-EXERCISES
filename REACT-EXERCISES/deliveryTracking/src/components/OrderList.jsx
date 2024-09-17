import OrderLayout from "./OrderLayout";
import { useState } from "react";

const OrderList = () => {
    const [orders, setOrders] = useState([
        {
            city: "Rotterdam",
            orderID: "91751",
            status: "ON THE WAY"
        },
        {
            city: "Amsterdam",
            orderID: "34134",
            status: "RECEIVED"
        },
        {
            city: "Eindhoven",
            orderID: "56723",
            status: "RECEIVED"
        },
        {

            city: "Barcelona",
            orderID: "74687",
            status: "RECEIVED"
        },
        {
            city: "Paris",
            orderID: "23466",
            status: "RECEIVED"
        },
        {
            city: "Toronto",
            orderID: "95678",
            status: "RECEIVED"
        },
        {
            city: "Berlin",
            orderID: "24579",
            status: "RECEIVED"
        },
        {
            city: "Vienna",
            orderID: "24578",
            status: "RECEIVED"
        },
    ]);
    return (
        <>
            <div className="orderList">
                <section>
                    <h1>Delivery Tracking</h1>
                    {
                        orders.map((order) => (
                            <OrderLayout
                                status={order.status}
                                city={order.city}
                                orderID={order.orderID}
                            />
                        ))
                    }
                </section>
            </div>
        </>
    );
}

export default OrderList;