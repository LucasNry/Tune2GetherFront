import axios from "axios";
import "./LinkService.css";

export const LinkService = ({
  logo,
  serviceName,
  endpoint,
  isServiceLinked,
}) => {
  const BASE_API_URL = "http://localhost:8080";

  const linkAccount = () => {
    axios
      .get(BASE_API_URL + endpoint, { withCredentials: true })
      .then((response) => window.location.replace(response.data["url"]));
  };
  return (
    <div className="linkServiceWrapper">
      <div className="serviceIdentifier">
        <img
          src={logo}
          alt={`${serviceName} Logo`}
          className="linkServiceLogo"
        />
        <p>{serviceName}</p>
      </div>
      {isServiceLinked ? (
        <p className="linkedText">Linked</p>
      ) : (
        <button className="linkAccountButton" onClick={linkAccount}>
          Link account
        </button>
      )}
    </div>
  );
};
