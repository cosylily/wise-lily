import React from "react";
import "./meaning.css";

export default function Phonetics(props) {
  if (props.phonetics.audio && props.phonetics.text) {
    return (
      <div>
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noreferrer"
          className="speaker"
        >
          🔊
        </a>
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}
