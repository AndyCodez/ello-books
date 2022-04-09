const Token = ({value, setToken}) => {
    return(
        <div>
             <button
                onClick={()=>{setToken()}}
            >
                Back
            </button>
            <p>{value}</p>
        </div>
    );
};

export default Token;