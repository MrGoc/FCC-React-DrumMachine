import React from "react";
import ReactDOM from "react-dom";

const drumPads = [
  {
    id: "Q",
    keyCode: 81,
    displayText: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: "W",
    keyCode: 87,
    displayText: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: "E",
    keyCode: 69,
    displayText: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: "A",
    keyCode: 65,
    displayText: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    id: "S",
    keyCode: 83,
    displayText: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    id: "D",
    keyCode: 68,
    displayText: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: "Z",
    keyCode: 90,
    displayText: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "X",
    keyCode: 88,
    displayText: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: "C",
    keyCode: 67,
    displayText: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

export function DrumDisplay() {
  return <div id="display">Display</div>;
}

export function DrumPad() {
  const handleClick = (url) => {
    const audio = new Audio(url);
    audio.loop = false;
    audio.play();
  };

  return (
    <div id="drum-pad">
      DrumPad
      {drumPads.map((el, ix) => (
        <div
          id={ix.toString()}
          className="drum-pad"
          onClick={() => handleClick(el.url)}
        >
          {el.id}
          <audio id={el.id} className="clip" src={el.url} />
        </div>
      ))}
    </div>
  );
}
