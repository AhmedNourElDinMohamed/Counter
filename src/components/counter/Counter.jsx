import { useState } from "react";
import "./Counter.css";

export const Counter = (props) => {
  let [counter, setCounter] = useState(0);

  const increamentCounter = () => {
    setCounter(counter + 1);
  };

  const decreamenttCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter((counter = 0));
  };

  return (
    <>
      <div className="container wrapper">
        <h1 className="heading">Counter</h1>
        <div className="counter-wrapper">
          <div className="count">{counter}</div>
        </div>
        <div className="btn-wrapper">
          <button onClick={decreamenttCounter} className="decrease-btn">
            -
          </button>
          <button onClick={resetCounter} className="reset-btn">
            Reset
          </button>
          <button onClick={increamentCounter} className="increase-btn">
            +
          </button>
        </div>
      </div>
    </>
  );
};
