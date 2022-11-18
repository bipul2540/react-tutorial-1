import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const decreaseCounter = () => {
    count = count - 1;
    setCount(count);
  };

  const increaseCounter = () => {
    count += 1;
    setCount(count);
  };

  return (
    <main>
      <button onClick={decreaseCounter}> - </button>
      <h1> {count} </h1>
      <button onClick={increaseCounter}> + </button>
    </main>
  );
};

export default Counter;
