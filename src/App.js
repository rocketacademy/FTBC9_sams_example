import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [
        { id: 1, name: "Durian", price: 150, countryOfOrigin: "Singpore" },
        { id: 2, name: "Eggplant", price: 20, countryOfOrigin: "Singpore" },
        { id: 3, name: "Fig", price: 50, countryOfOrigin: "Singpore" },
        // "Durian",
        // "Eggplant",
        // " Figs",
      ],
    };
  }

  // define class methods
  componentDidMount() {
    // when my component loads
    /// do wahtever is in here.
  }

  componentWillUnmount() {}

  render() {
    // contional rendering
    let name = "Sam";
    let button;
    const loggedIn = false;

    const fruit = ["Apple", "Banana", "Cherry"];

    if (loggedIn) {
      button = <button>Logout</button>;
    } else {
      button = <button>Login</button>;
    }

    // // click event function
    function click(e) {
      console.log(e);
      alert("You clicked the button!");
    }

    // data event function
    function eventName(name, type) {
      console.log(name);
      console.log(type);

      alert("infiity loop");
    }

    // logger function
    function logger(fruit) {
      alert(fruit);
    }

    let newArray = this.state.fruit.map((currentFruit, index) => (
      <div key={index}>
        <p>{currentFruit.name}</p> <p>price: {currentFruit.price}</p>
        <p>Country of orign: {currentFruit.countryOfOrigin}</p>
        <button onClick={() => logger(currentFruit.name)}>passdata</button>
      </div>
    ));

    // camelCasing
    // snake_casing
    console.log(newArray);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h2>Handling mouse events</h2>
          <button onClick={() => click()}>Click me for a click event</button>

          {/* {Passing the event into the click, you can pass anything you want to use in the function call} */}
          <button
            onClick={(e) => {
              const type = e.type;
              eventName("Sam", type);
            }}
          >
            Click me to see passing data inside -
          </button>

          <h4>Mouse over below.</h4>
          <ol
            onMouseEnter={function () {
              alert("You hovered here!");
            }}
          >
            <li>Apples</li>
            <li>Bacon</li>
            <li>Cheese</li>
          </ol>

          <p>{name && name === "Sam" && <h1>{name}</h1>}</p>

          {/* conditional rendering  */}
          {name && name === "Sam" ? (
            <div>The variable's value is {name} </div>
          ) : (
            <div>The variable's value is not 'Sam', it is: {name} </div>
          )}

          {button}

          {fruit && fruit.length > 0 ? (
            fruit.map((value, index) => (
              <div key={index}>
                <p>{value}</p>
              </div>
            ))
          ) : (
            <div>
              <p>No Fruits</p>
            </div>
          )}

          {newArray}
        </header>
      </div>
    );
  }
}

export default App;
