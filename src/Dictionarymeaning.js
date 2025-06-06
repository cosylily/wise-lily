import React from "react";

export default function Meaning(props) {
  return (
    <div className="definitionSec">
      <div className="titledefinition mb-2">{props.meaning.partOfSpeech}:</div>
      <div className="definition p-2">{props.meaning.definition}</div>
      <div className="example p-2 mb-2">example: {props.meaning.example}</div>
    </div>
  );
}
