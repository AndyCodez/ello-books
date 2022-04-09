import ello from "./ello";
import { useEffect } from "react";
import query from './Query';

const Book = () => {

    useEffect(() => {
        fetch(ello.baseURL, {
            method: "POST",
            headers: ello.headers,
            body: JSON.stringify(query)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }, []);

    return (
        <div className="Book">

        </div>
    );
};

export default Book;