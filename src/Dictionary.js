import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(searchWord);
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
      </form>
    </div>
  );
}
