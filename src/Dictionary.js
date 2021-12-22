import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    let word = searchWord;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSearch(event) {
    setSearchWord(event.target.value);
  }

  if (results === null) {
    return (
      <div className="Dictionary">
        <div className="dictionary">What word do you want to look up?</div>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleSearch}
            placeholder="Search for a word..."
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <div className="dictionary">Dictionary</div>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleSearch}
            placeholder="Search for a word..."
          />
        </form>
        <Results results={results} />
      </div>
    );
  }
}