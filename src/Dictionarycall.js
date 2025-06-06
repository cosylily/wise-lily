import React from "react";
import "./App.css";
import Meaning from "./Dictionarymeaning";

export default function Wordcalling(props) {
  if (props.need.word) {
    return (
      <div className="border rounded p-1 m-2">
        <div className="firstSec ms-3 mt-3">
          <div className="theword">{props.need.word}</div>
          <div className="phonetics">🔈{props.need.phonetic}</div>
        </div>
        <div className="secondSec p-3">
          {props.need.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div className="noResult m-2">⬆️Search a word now!⬆️</div>;
  }
}
