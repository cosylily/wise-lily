import React from "react";
import "./App.css";
import Meaning from "./Dictionarymeaning";
import Phonetics from "./Phonetics";

export default function Wordcalling(props) {
  if (props.need.word) {
    return (
      <div className="p-2 m-2 ">
        <div className="firstSec ms-3 mt-3 row">
          <span className="header col-8">
            <div className="theword">{props.need.word}</div>
            <div className="phonetics">
              {props.data.phonetics.map(function (phonetics, index) {
                return (
                  <div key={index}>
                    <Phonetics phonetics={phonetics} />
                  </div>
                );
              })}
            </div>
          </span>

          <span className="image col-4 mt-4">
            <img
              src={props.pictures.src.landscape}
              width="80%"
              alt={props.pictures.alt}
            />
          </span>
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
