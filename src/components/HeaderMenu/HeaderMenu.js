import logo from "../../resources/logo.png";
import gearIcon from "../../resources/gear-icon.png";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";
import { useRef, useState, useEffect } from "react";
import { getCookie } from "../../utils/HelperFunctions";
import { Tune2GetherAPIFacade } from "../../utils/Tune2GetherAPIFacade";

export function HeaderMenu() {
  const isUserCookiePresent = () => {
    if (userId) {
      return true;
    }

    return false;
  };

  const getUserInfo = (email, password) => {
    const facade = new Tune2GetherAPIFacade();
    facade
      .getUserInfo(email, password)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };

  const logOut = () => {
    const facade = new Tune2GetherAPIFacade();
    facade.logOut();
    setUserId(null);
  };

  const [userId, setUserId] = useState(getCookie("user_id"));
  const [user, setUser] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const loginWrapperRef = useRef();

  useEffect(() => {
    setUserId(getCookie("user_id"));
  }, [document.cookie]);

  useEffect(() => {
    if (userId) {
      getUserInfo(null, null);
    }
  }, []);

  return (
    <header>
      <div className="App-header">
        <Link to="/">
          <img className="tune2GetherLogo" src={logo} alt="logo" />
        </Link>
        <div className="loginContainer" ref={loginWrapperRef}>
          <div className="loginWrapper">
            {isUserCookiePresent() && user.username ? (
              <p className="userGreeting">{`Hi ${user.username}!`}</p>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <p className="loginButton">Log in</p>
              </Link>
            )}
            <img
              src={gearIcon}
              alt="gear-icon"
              className="gearIcon"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
              }}
            />
          </div>
          <div className={`settingsDropDown ${isDropdownOpen ? "" : "hidden"}`}>
            <div className="settingsMenu">
              <Link to="/accounts" style={{ textDecoration: "none" }}>
                <div className="settingsMenuItem">Link accounts</div>
              </Link>
              <div className="settingsMenuItem" onClick={() => logOut()}>
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
