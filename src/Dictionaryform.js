import React, { useState } from "react";
import axios from "axios";
import Wordcalling from "./Dictionarycall";
import "./App.css";

export default function DictionaryForm(props) {
  let [word, setword] = useState({});
  let [wordInfo, setwordInfo] = useState({});
  let apiKey = "3caeb6a7a0144t0bff6oc0e38972db67";
  let [data, setdata] = useState({});

  let [image, setImage] = useState({});

  function getphonetics(response) {
    console.log(response);
    setdata(response.data[0]);
  }
  function getimage(response) {
    console.log(response);
    setImage(response.data);
  }
  function wordSearch(event) {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let apiUrltwo = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrltwo).then(getphonetics);
    let apiUrlthree = `https://api.shecodes.io/images/v1/search?query=${word}&key=${apiKey}`;
    axios.get(apiUrlthree).then(getimage);
  }
  function handleSubmit(event) {
    event.preventDefault();
    wordSearch();
  }

  function handleResponse(response) {
    console.log(response);
    setwordInfo(response.data);
  }
  function handlingWord(event) {
    console.log(event.target.value);
    setword(event.target.value);
  }

  return (
    <div className="definiton-body">
      <div className="form">
        <form onSubmit={handleSubmit} className="">
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
      <Wordcalling need={wordInfo} data={data} photos={image} />
    </div>
  );
}
