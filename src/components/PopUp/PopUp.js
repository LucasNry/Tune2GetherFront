import "./PopUp.css";
import React from "react";

export const PopUp = ({ shouldPop, setShouldPop, text, backgroundColor }) => {
  const popUpError = () => {
    errorPopUpRef.current.style.opacity = "1";
    setTimeout(() => {
      errorPopUpRef.current.style.opacity = "0";
      setTimeout(() => {
        setShouldPop("");
      }, 700);
    }, 3000);
  };

  const errorPopUpRef = React.useRef();
  if (shouldPop) popUpError();

  return (
    <>
      <div className="popUp" style={{ backgroundColor }} ref={errorPopUpRef}>
        {text}
      </div>
    </>
  );
};
