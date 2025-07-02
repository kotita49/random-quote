import { useEffect, useState } from "react";


const quote_url = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcherLoader(){

    const[quote, setQuote] = useState({text: "", author: ""});
const[isLoading, setIsLoading]= useState(true);
    useEffect(()=>{
        fetchQuote();
    }, []) 

    async function fetchQuote() {
        const response = await fetch(quote_url);
        const responseJson = await response.json();
        const randomQuote = responseJson.quote;
        setQuote(randomQuote);
        setIsLoading(false)
    }

    return (

        <div>
<p class="loader" style={{opacity: isLoading? 1 : 0 }}>Loading ...</p>
           <h1>{quote.text}</h1>
           <h2>{quote.author}</h2>
           <button onClick={fetchQuote} disabled={isLoading}>Get a quote</button>
           
        </div>
    )
}