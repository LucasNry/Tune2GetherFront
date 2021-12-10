import "./ReadOnlyInput.css";

export const ReadOnlyInput = (props) => {
  return <input type="text" readOnly={true} value={props.url} />;
};
