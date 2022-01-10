import React, { useState, useEffect } from "react";
import Results from "./Results";
import Footer from "./Footer";
import FooterSearch from "./FooterSearch";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [synonym, setSynonym] = useState("");
  const getSynonym = (value) => {
    setSynonym(value);
  };

  useEffect(() => {
    setSynonym(synonym);
    let synonymSearchWord = synonym;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${synonymSearchWord}`;
    axios.get(url).then(handleDictionaryResponse);

    let pexelApiKey = `563492ad6f91700001000001386294a44b924f919e117f0a2ced6dda`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${synonymSearchWord}&per_page=6`;
    const headers = { authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }, [synonym]);

  function search(event) {
    event.preventDefault();

    let word = searchWord;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleDictionaryResponse);

    let pexelApiKey = `563492ad6f91700001000001386294a44b924f919e117f0a2ced6dda`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    const headers = { authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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
          <Results results={results} />
          <Footer />
        </section>
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
        <Results photos={photos} results={results} getSynonym={getSynonym} />
        <FooterSearch />
      </div>
    );
  }
}
