import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <h4>Synonyms:</h4>
        {props.synonyms.map((synonym, index) => {
          if (index < 10) {
            return <span key={index}> {synonym} </span>;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
