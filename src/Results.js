import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results[0].meanings);
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results[0].word}</h1>
        <h2>{props.results[0].phonetic}</h2>
        {props.results[0].meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
