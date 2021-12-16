import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");

  function search(event) {
    event.preventDefault();
    let word = searchWord;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response);
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
    </div>
  );
}
