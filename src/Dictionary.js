import React, { useState } from "react";
import Results from "./Results";
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

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleSearch}
          placeholder="Search for a word..."
        />
        <input type="submit" value="Search" />
      </form>
      <Results results={results} />
    </div>
  );
}
