import { useEffect, useState } from "react";
import Quote from "./components/Quote"

type IQuote = {
  quoteAuthor: string,
  quoteGenre: string,
  quoteText: string
}

function App() {

  const [data, setData] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRandomQuote(); // Fetch data on component mount
  }, []);

  const fetchRandomQuote = async () => {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes/random');
      const jsonData = await response.json();
      setData(jsonData?.data);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const fetchAuthorQuotes = async (author: string) => {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${author}`);
      const jsonData = await response.json();
      setData(jsonData?.data);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const handleClick = () => {
    fetchRandomQuote(); // Fetch data on button click
  };

  return (
    <>
      <header>
        <button onClick={handleClick}>random &#x27F3;</button>
      </header>
      <main>
        {loading ?
          <div>Loading...</div>
          :
          <>
            <div className="author-title">
              {data.length > 1 && <h1>{data[0].quoteAuthor}</h1>}
            </div>
            {data.map(quote => {
              return (
                <Quote key={quote.quoteText} {...quote} onAuthorClick={fetchAuthorQuotes} quotesNumber={data.length} />
              )
            })}
          </>
        }
      </main>
      <footer>
        created by Msultan9 - devChallenges.io
      </footer>
    </>
  )
}

export default App
