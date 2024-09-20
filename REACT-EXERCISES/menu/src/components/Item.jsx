const Item = ({ image, title, price, desc, category, id }) => {
    return (
        <div className="item__container">
            <img src={image} alt="" />
            <div className="item__information">
                <div className="item__intel">
                    <h2>{title}</h2>
                    <h3 className="item__price">{price}</h3>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Item;