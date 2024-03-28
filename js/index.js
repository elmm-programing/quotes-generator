// Get quotes from api
let apiQuotes = []

const newQuote = ()=>{
  if (apiQuotes.length == 0) {
    getQuotes()
  }
const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)]
  console.log(quote)
  
}

const getQuotes = async ()=>{
const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json"
  try {
    const response = await fetch(apiUrl); 
    apiQuotes = await response.json();
    newQuote()
    console.log(apiQuotes)
  } catch (err) {
    console.log(err)
  }
}
getQuotes()
