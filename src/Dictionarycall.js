import React from "react";
import "./App.css";
import Meaning from "./Dictionarymeaning";
import Phonetics from "./Phonetics";
import Image from "./Dictionaryimage";

export default function Wordcalling(props) {
  if (props.need.word) {
    return (
      <div className="p-2 m-2">
        <div className="firstSec ms-3 mt-3">
          <div className="header">
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
          <div className="header-2 border border-white rounded p-3 mt-3 me-4 ms-2">
            <div className="headerImage">Photos:</div>
            <div className="row">
              {props.photosdata.photos.map(function (image, index) {
                return (
                  <div className="col-4" key={index}>
                    <Image image={image} />
                  </div>
                );
              })}
            </div>
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
