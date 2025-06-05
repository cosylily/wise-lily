import React from "react";

export default function Wordcalling(props) {
  if (props.need.word) {
    return <div>Yo!</div>;
  } else {
    return null;
  }
}
