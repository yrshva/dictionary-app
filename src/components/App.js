import { useState, useEffect } from "react";
import Dictionary from "./Dictionary";
import Pictures from "./Pictures";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function App() {
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setKeyword(input);
  }
  function handleInputChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }
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

        {keyword && (
          <div className="row mt-3">
            <Dictionary word={keyword} />
            <Pictures word={keyword} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
