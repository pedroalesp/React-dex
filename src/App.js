import React, { useEffect } from "react";

import "./App.css";

function App() {
  const [pokeData, setPokeData] = React.useState({ results: [] });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    fetchPokeData();
  }, []);

  const fetchPokeData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=251/`
      );
      const data = await response.json();
      setLoading(false);
      setPokeData({ results: data.results });
      console.log(pokeData.results);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <button type="button" className="btn btn-primary">
        boton
      </button>
      {pokeData.results.map((pokemon) => {
        return (
          <ul className="list-unstyled">
            <li>
              <div>
                <h4>{pokemon.name}</h4>
                <label>{pokemon.types[0].type.name}</label>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
