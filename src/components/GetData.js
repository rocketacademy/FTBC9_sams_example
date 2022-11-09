import React from "react";
import "./GetData.css";

export default class GetData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      name: "",
    };
  }

  testMe() {
    console.log("This class, layer 1", this);

    const anotherTest = () => {
      console.log(this);
    };

    anotherTest();
  }

  callAPI = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        let pokemon = {
          name: response.name,
          image: response.sprites.front_default,
          weight: response.weight,
        };

        console.log(this.state.pokemon);

        if (this.state.pokemon && this.state.pokemon.length > 0) {
          this.setState(
            {
              pokemon: [...this.state.pokemon, pokemon],
            },
            () => {
              let itemToStore = JSON.stringify(this.state.pokemon);
              // localStorage only stores strings.~!>!!>!>>!
              localStorage.setItem("pokemon", itemToStore);
            }
          );
        } else {
          this.setState(
            {
              pokemon: [pokemon],
            },
            () => {
              let itemToStore = JSON.stringify(this.state.pokemon);
              // localStorage only stores strings.~!>!!>!>>!
              localStorage.setItem("pokemon", itemToStore);
            }
          );
        }
      });
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  componentDidMount() {
    // only if we dont have local storage!
    // this.callAPI("mew");

    // getting currently stored pokemon from localStorage
    let currenlyStoredPokemon = localStorage.getItem("pokemon");
    console.log(currenlyStoredPokemon);
    let parsedCurrentlyStoredPokemon = JSON.parse(currenlyStoredPokemon);
    console.log(parsedCurrentlyStoredPokemon);
    if (parsedCurrentlyStoredPokemon === null) {
      parsedCurrentlyStoredPokemon = [];
    }
    this.setState({
      pokemon: parsedCurrentlyStoredPokemon,
    });
  }

  componentDidUpdate() {
    console.log(this.state.pokemon);
  }

  clearStorage = () => {
    localStorage.clear();
    this.setState({
      pokemon: [],
    });
  };

  render() {
    return (
      <div className="container">
        <h1>API</h1>
        <input
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />
        <button onClick={() => this.callAPI(this.state.name)}>
          Click Me for Pokemon
        </button>
        <div className="pokemonContainer">
          {this.state.pokemon && this.state.pokemon.length > 0 ? (
            this.state.pokemon.map((monster) => (
              <div className="card">
                <img src={monster.image} alt={monster.name} />
                <p>
                  {monster.name} - {monster.weight}
                </p>
              </div>
            ))
          ) : (
            <p>No Pokemon yet</p>
          )}
        </div>

        <button onClick={() => this.clearStorage()}>
          Click to delete stored pokemon
        </button>

        <button onClick={() => this.testMe()}>Click to test</button>
      </div>
    );
  }
}
