import React, { useState } from "react";
import "./App.css";

export default function DictionaryForm() {
  let [word, setword] = useState({});

  function wordSearch(event) {
    event.preventDefault();
    console.log(`Searching for ${word}`);
  }
  function handlingWord(event) {
    console.log(event.target.value);
    setword(event.target.value);
  }
  return (
    <div className="form">
      <form onSubmit={wordSearch}>
        <input type="search" onChange={handlingWord} />
        <input type="submit" />
      </form>
    </div>
  );
}
