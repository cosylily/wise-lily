import React from "react";
import "./meaning.css";

export default function Examples(props) {
  if (props.example) {
    return <div className="example">example: {props.example}</div>;
  } else {
    return null;
  }
}
