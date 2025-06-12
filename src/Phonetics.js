import React from "react";

export default function Phonetics(props) {
  if (props.phonetics.audio && props.phonetics.text) {
    return (
      <div>
        <a href={props.phonetics.audio} target="_blank">
          🔊
        </a>
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}
