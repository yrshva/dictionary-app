import { useEffect } from "react";
import soundwaves from "../img/sound-waves.svg";

export default function Dictionary(props) {
  const word = props.wordData;
  const context = new AudioContext();
  let listenWord;
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
    if (word.phonetics[0] && word.phonetics[0].audio != "") {
      fetch(word.phonetics[0].audio)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
        .then((audioBuffer) => {
          listenWord = audioBuffer;
        });
    }
  }, [word]);
  return (
    <div className="row mt-2">
      <div className="col-6">
        <h3>{word.word}</h3>
        {word.phonetic && <h5>{word.phonetic}</h5>}
        {word.phonetics[0] && word.phonetics[0].audio != "" && (
          <div className="listen-wrap">
            <button className="btn-custom mt-2" onClick={handleListenButton}>
              Listen
            </button>
            <img
              src={soundwaves}
              alt="sound waves"
              width="50"
              className="ms-3"
            />
          </div>
        )}
        <div className="partOfSpeach">
          {word.meanings && (
            <div>
              <ul>
                {word.meanings.map((el, index) => (
                  <li key={index}>
                    <h4>{el.partOfSpeech}</h4>
                    <ul>
                      {el.definitions.map((def, key) => (
                        <li key={key}>{def.definition}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
