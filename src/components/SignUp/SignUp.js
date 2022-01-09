import { useState } from "react";
import "./SignUp.css";
import { UserInput } from "../UserInput/UserInput";
import { PopUp } from "../PopUp/PopUp";
import { Tune2GetherAPIFacade } from "../../utils/Tune2GetherAPIFacade";
import { DEEZER, SPOTIFY, YOUTUBE } from "../../constants/Services";

function SignUp() {
  const signUp = () => {
    const facade = new Tune2GetherAPIFacade();
    facade
      .signUp(username, email, password, preferredService)
      .then((response) =>
        window.location.replace("http://localhost:3000/login")
      )
      .catch((error) => setErrorMessage(error.response.data["message"]));
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [preferredService, setPreferredService] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="signUpFormWrapper">
      <PopUp
        shouldPop={errorMessage}
        setShouldPop={setErrorMessage}
        text={errorMessage}
        backgroundColor="red"
      />
      <UserInput
        fieldName="Username"
        width="40"
        height="2em"
        setValue={setUsername}
      />
      <br />
      <UserInput
        fieldName="Email"
        width="40"
        height="2em"
        setValue={setEmail}
      />
      <br />
      <UserInput
        fieldName="Password"
        width="20"
        height="2em"
        setValue={setPassword}
        inputType="password"
      />
      <br />
      <p className="serviceSelectText">Preferred Streaming Service</p>
      <select
        className="serviceSelect"
        id="signUp"
        onChange={(e) => setPreferredService(e.target.value)}
      >
        <option value="spotify">{SPOTIFY}</option>
        <option value="youtube">{YOUTUBE}</option>
        <option value="deezer">{DEEZER}</option>
      </select>
      <br />
      <button className="registerButton" onClick={() => signUp()}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
