import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  function searchSynonym(event) {
    let synonym = event.target.innerHTML;
  }
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <h4>Synonyms:</h4>
        {props.synonyms.map((synonym, index) => {
          if (index < 10) {
            return (
              <button
                type="button"
                class="btn btn-light btn btn-outline-dark"
                key={index}
                onClick={searchSynonym}
              >
                {synonym}
              </button>
            );
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
