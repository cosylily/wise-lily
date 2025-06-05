import React from "react";
import axios from "axios";

export default function Wordcalling(props) {
  let apiKey = "3caeb6a7a0144t0bff6oc0e38972db67";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${props.word}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  function handleResponse(response) {
    console.log(response);
  }
  return <div></div>;
}
