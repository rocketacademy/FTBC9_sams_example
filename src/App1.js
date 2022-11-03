import React from "react";
import Counter from "./components/Counter";
import AddCounter from "./components/AddCounter";
import "./App1.css";
import GetData from "./components/GetData";

import WelcomeDialog from "./components/Specilization";
// import { Dialog, FancyBorder } from "./Specilization";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { count: 0, name: "Sam" },
        { count: 4, name: "Bryans" },
        { count: 1, name: "Foong" },
      ],
    };
  }

  newCounter = (name) => {
    console.log("PArent func adding new counter -", name);
    let counter = { name: name, count: 0 };
    // Get my counters in a shallow array, and add in my new counter
    let counters = [...this.state.counters, counter];

    this.setState(
      {
        counters: counters,
      },
      () => {
        console.log(this.state.counters);
      }
    );
  };

  incrementMe = (name) => {
    let index;

    for (let i = 0; i < this.state.counters.length; i++) {
      console.log(this.state.counters[i]);
      console.log(name);
      if (this.state.counters[i].name === name) {
        console.log("here");
        index = i;
      }
    }
    console.log(index);

    // Get my counters in a shallow array
    let counters = [...this.state.counters];
    // Select my counter that I clicked on
    let counter = this.state.counters[index];
    // update the counters current count by 1
    counter.count = counter.count + 1;
    // alter the shallow array with the newly updated counter
    counters.splice(index, 1, counter);
    // set my new counter state.
    this.setState({
      counters: counters,
    });
  };

  // create a decemement me function, to put on all counters

  // See if you can delete a counter from the current state of counter

  render() {
    let copy = [...this.state.counters];
    let sorted = copy.sort((a, b) => b.count - a.count);

    return (
      <div className="appContainer">
        <h2>Counters</h2>
        <div className="allCountersContainer">
          {/*style={{ display: "flex" }} */}
          {sorted.map((counter, index) => (
            <div key={`${counter.name}+1`}>
              <Counter
                {...counter}
                handlePlus={this.incrementMe}
                // equivlient of below
                // name={counter.name}
                // count={counter.count}
              />
            </div>
          ))}
        </div>
        <AddCounter newCounter={this.newCounter} />
        <GetData />

        {/* <WelcomeDialog /> */}
      </div>
    );
  }
}
