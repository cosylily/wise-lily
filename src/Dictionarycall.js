import React from "react";
import "./App.css";

export default function Wordcalling(props) {
  if (props.need.word) {
    return (
      <div className="border rounded p-1 m-2">
        <div className="firstSec m-3">
          <div className="theword">{props.need.word}</div>
          <div className="phonetics">🔈{props.need.phonetics}</div>
        </div>
        <div className="secondSec p-3 mt-3">
          <div className="definition">Definition: {props.need.definition}</div>
          <div className="synonym">Similar word: {props.need.synonym}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
