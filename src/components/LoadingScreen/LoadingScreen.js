import "./LoadingScreen.css";
import loadingArrow from "../../resources/spinning-arrow.png";

export const LoadingScreen = ({ optionalText, isLoading }) => {
  return (
    <div className="backdrop" style={{ display: isLoading ? "flex" : "none" }}>
      <img src={loadingArrow} alt="loadingArrow" className="loadingArrow" />
      {optionalText ? <p className="loadingText">{optionalText}</p> : null}
    </div>
  );
};
