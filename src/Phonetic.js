import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let phoneticAudio = new Audio(props.phonetic.audio);

  function play() {
    phoneticAudio.play();
  }

  console.log(props.phonetic.text);
  return (
    <div className="Phonetic">
      <i class="fas fa-volume-up" onClick={play}></i>
      <span>{props.phonetic.text}</span>
    </div>
  );
}
