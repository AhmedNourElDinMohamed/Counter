import "./Counter.css";

export const Counter = (props) => {
  return (
    <>
      <div className="count">{props.counter}</div>
    </>
  );
};
