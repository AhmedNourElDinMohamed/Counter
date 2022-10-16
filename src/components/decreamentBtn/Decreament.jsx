import "./Decreament.css";

export const Decreament = (props) => {
  console.log(props);
  return (
    <>
      <button onClick={props.decreament} className="decrease-btn">
        -
      </button>
    </>
  );
};
