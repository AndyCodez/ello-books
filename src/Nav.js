const Nav = ({ book, pageIndex, offset, setPageIndex }) => {

    return(
        <div className="Nav">
            <button
                onClick={()=>{setPageIndex(pageIndex-2)}}
                disabled={ pageIndex === 0 }
            >
                Previous
            </button>
            <button 
                onClick={()=>{
                setPageIndex(pageIndex+2)
                }}
                disabled={ book.pages.length - offset === pageIndex ? true : false }
            >
                Next
            </button>
        </div>  
    );
};

export default Nav;