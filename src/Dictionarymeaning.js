import React from "react";
import "./meaning.css";
import Synonyms from "./Dictionarysynonyms";
import Examples from "./Dictionaryexample";

export default function Meaning(props) {
  return (
    <div className="definitionSec border rounded border-white p-3 ms-2 me-2 mb-3 mt-3">
      <div className="titledefinition mb-2">{props.meaning.partOfSpeech}</div>
      <div className="definition p-2">{props.meaning.definition}</div>
      <div className="p-2">
        <Examples example={props.meaning.example} />
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
