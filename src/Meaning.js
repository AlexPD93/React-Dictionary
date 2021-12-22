import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      <p>
        <strong>Definition:</strong> {props.meaning.definitions[0].definition}
      </p>
      <br />
      <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
    </div>
  );
}
