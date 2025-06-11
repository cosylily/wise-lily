import React from "react";
import "./meaning.css";
import Synonyms from "./Dictionarysynonyms";

export default function Meaning(props) {
  return (
    <div className="definitionSec">
      <div className="titledefinition mb-2">{props.meaning.partOfSpeech}</div>
      <div className="definition p-2">{props.meaning.definition}</div>
      <div className="example p-2">Example: {props.meaning.example}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
