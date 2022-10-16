import "./Reset.css";

export const Reset = (props) => {
  return (
    <>
      <button onClick={props.reset} className="reset-btn">
        Reset
      </button>
    </>
  );
};
