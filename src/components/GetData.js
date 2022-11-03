import React from "react";

export default class GetData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      name: "",
    };
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

        this.setState({
          pokemon: [...this.state.pokemon, pokemon],
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  componentDidMount() {
    this.callAPI("mew");
  }

  componentDidUpdate() {
    console.log(this.state.pokemon);
  }

  render() {
    return (
      <div>
        <h1>API</h1>
        <input
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />
        <button onClick={() => this.callAPI(this.state.name)}>
          Click Me for Pokemon
        </button>

        {this.state.pokemon.length > 0 ? (
          this.state.pokemon.map((monster) => (
            <div>
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
    );
  }
}
