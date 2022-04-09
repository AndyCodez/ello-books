const BookDetails = ({book}) => {

    return (
        <div className="text-center">
            <h1>
                Ello Technology
            </h1>

            <p>Book title: {book.title} </p>
            <p>Author: {book.author} </p>
        </div>
    ); 
};

export default BookDetails;