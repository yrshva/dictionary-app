import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container wrap">
        <h2>What word would you like to look up?</h2>
        <form className="row d-flex justify-content-center">
          <input
            type="text"
            placeholder="Start typing.."
            className="col m-2 input"
          />
        </form>
        <div className="row">
          <div className="col-6">
            <h3>Ocean</h3>
            <h5>/ˈəʊʃ(ə)n/</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
