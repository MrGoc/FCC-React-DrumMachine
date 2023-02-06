import ReactDOM from "react-dom";
import { useEffect, React } from "react";

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

const idDisplay = "display";

export function DrumDisplay() {
  return <div id={idDisplay}>Display</div>;
}

export function DrumPad() {
  const playAudio = (drumPad) => {
    const audio = document.getElementById(drumPad.id);
    audio.play();

    const display = document.getElementById(idDisplay);
    display.innerText = drumPad.displayText;
  };

  useEffect(() => {
    const handleKeyDown = (ev) => {
      let drumPad = drumPads.find((el) => el.keyCode === ev.keyCode);
      if (drumPad != undefined) {
        /*
        ev.currentTarget.classList.toggle(
          "drum-pad-clicked",
          "drum-pad-normal"
        );
        */
        ev.preventDefault();
        playAudio(drumPad);
      }
    };
    /*
    const handleKeyUp = (ev) => {
      ev.currentTarget.classList.toggle("drum-pad-normal", "drum-pad-clicked");
    };
    */

    document.addEventListener("keydown", handleKeyDown);
    //document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      //document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleClick = (ev, id) => {
    const audio = ev.currentTarget.firstElementChild; // new Audio(url);
    audio.play();

    let drumPad = drumPads.find((el) => el.id === id);
    if (drumPad != undefined) {
      const display = document.getElementById(idDisplay);
      display.innerText = drumPad.displayText;
    }
  };

  return (
    <div id="drum-pad">
      {drumPads.map((el, ix) => (
        <div
          id={ix.toString()}
          className="drum-pad drum-pad-normal"
          onClick={(ev) => handleClick(ev, el.id)}
        >
          {el.id}
          <audio id={el.id} className="clip" src={el.url} />
        </div>
      ))}
    </div>
  );
}
