import { useState } from "react";
import "./Login.css";
import { UserInput } from "../UserInput/UserInput";
import { PopUp } from "../PopUp/PopUp";
import { Link } from "react-router-dom";
import { Tune2GetherAPIFacade } from "../../utils/Tune2GetherAPIFacade";

function Login() {
  const login = async () => {
    const facade = new Tune2GetherAPIFacade();
    facade
      .getUserInfo(email, password)
      .then(() => document.location.replace("/"))
      .catch((error) => {
        setErrorMessage(error.response.data["message"]);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="loginFormWrapper">
      <PopUp
        shouldPop={errorMessage}
        setShouldPop={setErrorMessage}
        text={errorMessage}
        backgroundColor="red"
      />
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
      <Link to="/signup" className="signUpText">
        Don't have an account yet? Click here to Sign Up
      </Link>
      <br />
      <button className="submitLoginInfoButton" onClick={() => login()}>
        Log in
      </button>
    </div>
  );
}

export default Login;
