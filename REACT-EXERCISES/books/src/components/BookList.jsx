import { useState } from "react";
import Book from "./Book";

const BookList = () => {
    const [books, setBook] = useState([{
        image: "",
        title: "Interesting Facts for Curious Minds",
        author: "Jordan Moore"
    },
    {
        image: "",
        title: "Atomic Habits",
        author: "James Clear"
    },
    {
        image: "",
        title: "Fairy Tale",
        author: "Stephen King"
    }
    ]);

    return (
        <>
            {
                books.map((book) => (
                    <Book title={book.title} image={book.image} author={book.author} />
                ))
            }
        </>
    );
};

export default BookList;