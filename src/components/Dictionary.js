import { useEffect, useState } from "react";
import axios from "axios";
import Listen from "./Listen";
import PartOfSpeach from "./PartOfSpeach";
import "../styles/Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(null);

  function handleResponse(response) {
    setWord(response.data[0]);
  }
  useEffect(() => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(apiUrl).catch((data, status) => {
      alert("Please enter a valid word");
    });
  }, [props.word]);

  if (word) {
    return (
      <div className="col">
        <h3>{word.word}</h3>
        {word.phonetic && <h5>{word.phonetic}</h5>}
        {word.phonetics[0] && word.phonetics[0].audio !== "" && (
          <Listen audio={word.phonetics[0].audio} />
        )}
        <div className="partOfSpeach">
          {word.meanings && <PartOfSpeach meanings={word.meanings} />}
        </div>
      </div>
    );
  } else return null;
}
