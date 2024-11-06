const Book = ({ image, title, author }) => {
    return (
        <article>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h3>{author}</h3>
        </article>
    );
}

export default Book;
// SFC TO HAVE THIS ^