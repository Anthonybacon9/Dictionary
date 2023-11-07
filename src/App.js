import './App.css';
import { useState } from 'react';
import SearchBar from './SearchBar';

function App() {
  const title = 'Dictionary';
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  const [word, setWord] = useState("");


  async function results(value) {
    try {
      const response = await fetch(url+value);
      const jsonResponse = await response.json();
      await setWord(jsonResponse.word);
      await console.log(jsonResponse)
    } catch {
      
    }
  }

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <SearchBar search={results}/>
        <h2> {word} </h2>
      </div>
    </div>
  );

}

export default App;
