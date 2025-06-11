import React from "react";
import "./meaning.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <div className="synonyms p-2">Similar words:</div>{" "}
        <ul className="synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
