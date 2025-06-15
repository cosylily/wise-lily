import React from "react";
import "./App.css";
import Meaning from "./Dictionarymeaning";
import Phonetics from "./Phonetics";

export default function Wordcalling(props) {
  if (props.need.word && props.image.photos) {
    return (
      <div className="p-2 m-3 ">
        <div className="firstSec row">
          <div className="header col-8">
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
          </div>

          <div className="image col-4">
            <img
              src={props.image.photos[0].src.landscape}
              alt={props.image.photos[0].alt}
              width="200px"
            />
          </div>
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
