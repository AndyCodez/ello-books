const Page = ({page, setToken}) => {
    const contentArray = page['content'].split(" ")

    return (
        <div className="Page">
            {page.tokens.map((token, index) => {
                return <span key={index} onClick={() => {setToken(token.value)}}>
                    {contentArray[index] + " "}
                </span>
                })
            }
        </div>
    );
};

export default Page;