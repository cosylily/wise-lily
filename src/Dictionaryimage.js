import React from "react";
import "./meaning.css";
export default function Image(props) {
  return (
    <div className="mt-2">
      <img
        src={props.image.src.landscape}
        width="80%"
        className="image"
        alt="matching the definition"
      />
    </div>
  );
}
