import "./Model.css";

const Model = (props) => {
  return <>
    <div onClick={props.onClose} className="backdrop"></div>
    <div className="model">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button onClick={props.onClose}>Okay</button>
    </div>
  </>
};

export default Model;
