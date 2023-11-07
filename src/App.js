import './App.css';
import { useState } from 'react';
import SearchBar from './SearchBar';

function App() {
  const title = 'Dictionary';
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  const [quote, setQuote] = useState("")

  async function results() {
    const response = await fetch(url+"hello");
    const jsonResponse = await response.json();
    setQuote(jsonResponse.quote);
  }

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <SearchBar search={results}/>
        <h2> {quote} </h2>
      </div>
    </div>
  );

}

export default App;
