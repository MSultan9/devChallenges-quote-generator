type Props = {
    quoteAuthor: string,
    quoteGenre: string,
    quoteText: string,
    onAuthorClick: (author: string) => void;
    quotesNumber: number
}


const Quote = (props: Props) => {
    return (
        <div className="quote-wrapper">
            <div className="quote">
                <p>
                    {props.quoteText}
                </p>
            </div>
            {props.quotesNumber === 1 &&
                <div className="author" onClick={() => props.onAuthorClick(props.quoteAuthor)}>
                    <h1>{props.quoteAuthor}</h1>
                    <h2>{props.quoteGenre}</h2>
                </div>
            }
        </div>
    )
}

export default Quote