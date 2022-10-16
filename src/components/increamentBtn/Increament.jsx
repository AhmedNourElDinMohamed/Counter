import "./Increament.css";

export const Increament = (props) => {
  return (
    <>
      <button onClick={props.increament} className="increase-btn btn">
        +
      </button>
    </>
  );
};
