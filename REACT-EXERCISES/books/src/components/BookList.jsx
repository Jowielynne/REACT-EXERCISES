import { useState } from "react";

const BookList = () => {
    const [book, setBook] = useState([{
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
        </>
    );
}

export default BookList;