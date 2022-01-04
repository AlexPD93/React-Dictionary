import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let phoneticAudio = new Audio(props.phonetic.audio);

  function play() {
    phoneticAudio.play();
  }

  return (
    <div className="Phonetic">
      <i className="fas fa-volume-up audio-icon" onClick={play}></i>
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
