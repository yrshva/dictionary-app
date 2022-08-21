import { useState, useEffect } from "react";
import axios from "axios";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function App() {
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState(null);
  const [wordData, setWordData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setWordData(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setKeyword(input);
  }

  function handleInputChange(event) {
    event.preventDefault();
    setLoaded(false);
    setInput(event.target.value);
  }

  useEffect(() => {
    if (keyword !== null) {
      const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
      axios.get(apiUrl).catch((data, status) => {
        alert("Please enter a valid word");
      });
    }
  }, [keyword]);
  useEffect(() => {
    setTimeout(() => {
      if (wordData !== null) {
        setLoaded(true);
        console.log(wordData);
      }
    }, 500);
  }, [wordData]);
  return (
    <div className="App">
      <div className="container wrap">
        <h2>What word would you like to look up?</h2>
        <form
          className="row d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Start typing.."
            className="col input"
            onChange={handleInputChange}
          />
        </form>
        {loaded ? (
          <Dictionary wordData={wordData} />
        ) : (
          <p className="ms-2 mt-2 loading">Please enter the word</p>
        )}
      </div>
    </div>
  );
}

export default App;
