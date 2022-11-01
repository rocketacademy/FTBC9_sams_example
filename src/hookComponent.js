// m2 concept - hooks
import { useState } from "react";

export default function Counter(props) {
  // add state into functional react component
  let [count, setCount] = useState(0);
  console.log(count);

  return (
    <div>
      Hello World {props.name}
      {/* Displaying the state */}
      <p>{count}</p> {/* updating the state */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
