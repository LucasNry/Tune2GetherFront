import "./UserInput.css";

export function UserInput({ fieldName, width, height, setValue, inputType }) {
  return (
    <div className="userInputWrapper">
      <span className="fieldName">{`${fieldName}`}</span>
      <input
        type={`${inputType ? inputType : "text"}`}
        style={{ width: `${width}em`, height: `${height}em` }}
        className="loginInput"
        name="Login"
        id="email"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
