import './App.css';
import { useState } from 'react';
import SearchBar from './SearchBar';

function App() {
  const title = 'Dictionary';
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);


  async function results(value) {
    try {
      const response = await fetch(url+value);
      const jsonResponse = await response.json();
      setWord(jsonResponse[0].word);
      setMeanings (jsonResponse[0]?.meanings || []);
      console.log(jsonResponse)
    } catch (error){
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <SearchBar search={results} />
        <h2 className='wordColour'>{word}</h2>
        {meanings.map((meaning, index) => (
          <div key={index}>
            <h3 className='definition'>{meaning.partOfSpeech}</h3>
            {meaning.definitions.map((definition, defIndex) => (
              <div key={defIndex} className='definition'>
                <p>Definition: {definition.definition}</p>
                {definition.example && <p>Example: {definition.example}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

}

export default App;
