import React, { useState } from "react";
import Results from "./Results";
import Footer from "./Footer";
import FooterSearch from "./FooterSearch";
import "./Dictionary.css";
import axios from "axios";

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
        <section>
          <h2 className="dictionary">What word do you want to look up?</h2>
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleSearch}
              placeholder="Search for a word..."
            />
            <span>
              <i onClick={search} className="fas fa-search search-icon"></i>
            </span>
          </form>
        </section>
        <Results results={results} />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <section>
          <h2 className="dictionary">Dictionary</h2>
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleSearch}
              placeholder="Search for a word..."
            />
            <span>
              <i onClick={search} className="fas fa-search search-icon"></i>
            </span>
          </form>
        </section>
        <Results results={results} />
        <FooterSearch />
      </div>
    );
  }
}
