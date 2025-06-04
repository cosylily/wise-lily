import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function DictionaryForm() {
  let [word, setword] = useState({});
  let apiKey = "3caeb6a7a0144t0bff6oc0e38972db67";

  function wordSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(`Searching for ${word}`);
  }

  function handleResponse(response) {
    console.log(response.data);
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
