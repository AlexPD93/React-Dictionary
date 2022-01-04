import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h2>{props.meaning.partOfSpeech}</h2>
        <p className="definition">{props.meaning.definitions[0].definition}</p>
        <p className="example">"{props.meaning.definitions[0].example}"</p>
        <br />
        <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
      </section>
    </div>
  );
}
