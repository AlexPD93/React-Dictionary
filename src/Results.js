import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Photos from "./Photos";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <div className="wordSearch">{props.results[0].word}</div>
          <Phonetic phonetic={props.results[0].phonetics[0]} />
        </section>
        <Photos photos={props.photos} />
        {props.results[0].meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} getSynonym={props.getSynonym} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
