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
      <form onSubmit={wordSearch} className="">
        <input
          type="search"
          onChange={handlingWord}
          placeholder="Look for the word..."
          className="mt-3 mb-3 p-2 border border-end-0 rounded rounded-end-0 searchBox"
        />
        <input
          type="submit"
          value="🔍"
          className="border border-start-0 rounded rounded-start-0 p-2 mt-3 mb-3 submitButton"
        />
      </form>
    </div>
  );
}
