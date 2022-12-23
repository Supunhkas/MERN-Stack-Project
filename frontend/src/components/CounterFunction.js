import React, { useState } from "react";

function CounterFunction() {
  let [increment, setIncrement] = useState(0);

  function counterFun() {
    setIncrement(++increment);
  }
  return (
    <div>
      <h3> {increment}</h3>
      <button onClick={(e) => counterFun()}>Increment</button>
    </div>
  );
}

export default CounterFunction;
