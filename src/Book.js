import ello from "./ello";
import { useEffect, useState } from "react";
import query from './Query';

const Book = () => {
    const [book, setBook] = useState({});

    useEffect(() => {
        fetch(ello.baseURL, {
            method: "POST",
            headers: ello.headers,
            body: JSON.stringify(query)
        })
        .then(response => response.json())
        .then(data => {
            const book = data.data.book;
            setBook(book)
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <div className="Book">
            <div>
                <h1>
                    Ello Technology
                </h1>

                <p>Book title: {book.title} </p>
                <p>Author: {book.author} </p>
            </div>
        </div>
    );
};

export default Book;