import React from "react";
import "./meaning.css";
export default function Image(props) {
  if (props.image.src.landscape) {
    return (
      <div className="mt-2">
        <img src={props.image.src.landscape} width="80%" className="image" />
      </div>
    );
  } else {
    return null;
  }
}
