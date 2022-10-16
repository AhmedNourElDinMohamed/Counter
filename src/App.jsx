import { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Decreament } from "./components/decreamentBtn/Decreament";
import { Increament } from "./components/increamentBtn/Increament";
import { Reset } from "./components/resetBtn/Reset";

function App() {
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
    <div className="App">
      <div className="App-header">
        <h1 className="heading">Counter</h1>
        <div className="counter-wrapper">
          <Counter counter={counter}></Counter>
        </div>
        <div className="btn-wrapper">
          <Decreament decreament={decreamenttCounter}></Decreament>
          <Reset reset={resetCounter}></Reset>
          <Increament increament={increamentCounter}></Increament>
        </div>
      </div>
    </div>
  );
}

export default App;
