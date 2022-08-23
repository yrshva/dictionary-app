export default function PartOfSpeach(props) {
  return (
    <div>
      <ul>
        {props.meanings.map((el, index) => (
          <li key={index}>
            <h4>{el.partOfSpeech}</h4>
            <ul className="definitions-list">
              {el.definitions.map((def, key) => (
                <li key={key}>
                  <div className="definition">
                    <p className="me-1">{key + 1}.</p>
                    <p>{def.definition}</p>
                  </div>
                  {def.example && (
                    <div className="example">
                      <p className="me-1">e.g.</p>
                      <p>{def.example}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
