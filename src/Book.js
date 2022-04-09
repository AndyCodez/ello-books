import ello from "./ello";
import { useEffect, useState } from "react";
import query from './Query';
import Page from "./Page";
import Nav from "./Nav";
import Token from "./Token";
import BookDetails from "./BookDetails";

const Book = () => {
    const [book, setBook] = useState({});
    const [pageIndex, setPageIndex] = useState(0);
    const [token, setToken] = useState();

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

    const bookPresent = Object.keys(book).length > 0;

    let pageOffset = 1;
    if (bookPresent) {
        if (book.pages.length % 2 === 0) {
            pageOffset = 2;
        }
    }

    return (
        bookPresent ? (
            token ? (<Token value={token} setToken={setToken}/>): (
                <div className="Book">
                    <BookDetails book={book}/>

                    <div className="flex-container">
                        <Page page={book.pages[pageIndex]} setToken={setToken}/>
                        <Page page={book.pages[pageIndex+1]} setToken={setToken}/>
                    </div>
                    <Nav book={book} pageIndex={pageIndex} offset={pageOffset} setPageIndex={setPageIndex}/>
                </div>
            )
        ) : ("loading...")
    );
};

export default Book;