import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import {
  decreamentCounter,
  increamentCounter,
  resetCounter,
} from "../../redux/counterSlice";
export const Counter = () => {
  const counter = useSelector((state) => state.counterStore.counter);
  const dispatch = useDispatch();

  const increament = () => {
    dispatch(increamentCounter(1));
  };
  const decreament = () => {
    dispatch(decreamentCounter(1));
  };
  const reset = () => {
    dispatch(resetCounter());
  };
  return (
    <>
      <div className="container wrapper">
        <h1 className="heading">Counter</h1>
        <div className="counter-wrapper">
          <div className="count">{counter}</div>
        </div>
        <div className="btn-wrapper">
          <button onClick={decreament} className="decrease-btn">
            -
          </button>
          <button onClick={reset} className="reset-btn">
            Reset
          </button>
          <button onClick={increament} className="increase-btn">
            +
          </button>
        </div>
      </div>
    </>
  );
};
