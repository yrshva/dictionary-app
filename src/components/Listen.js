import { useEffect, useState } from "react";
import soundwaves from "../img/sound-waves.svg";
export default function Listen(props) {
  const context = new AudioContext();
  const [listenWord, setListenWord] = useState(null);
  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
  function handleListenButton(event) {
    event.preventDefault();
    play(listenWord);
  }
  useEffect(() => {
    fetch(props.audio)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        setListenWord(audioBuffer);
      });
  }, [props.audio]);
  return (
    <div className="listen-wrap">
      <button className="btn-custom mt-2" onClick={handleListenButton}>
        Listen
      </button>
      <img src={soundwaves} alt="sound waves" width="50" className="ms-3" />
    </div>
  );
}
