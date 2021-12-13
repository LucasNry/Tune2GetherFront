import spotifyLogo from "../../resources/Spotify logo.png";
import deezerLogo from "../../resources/Deezer logo.png";
import ytMusicLogo from "../../resources/YT Music logo.png";
import "./LinkCreator.css";
import React, { useState } from "react";
import { Tune2GetherAPIFacade } from "../../utils/Tune2GetherAPIFacade";
import { SPOTIFY, YOUTUBE, DEEZER } from "../../constants/Services";
import { HowToHelper } from "../HowToHelper/HowToHelper";

export const LinkCreator = ({ setUniversalLink }) => {
  const popUpError = () => {
    errorPopUpRef.current.style.opacity = "1";
    setTimeout(() => (errorPopUpRef.current.style.opacity = "0"), 4000);
  };

  const getLogo = (service) => {
    switch (service) {
      case SPOTIFY:
        return spotifyLogo;
      case YOUTUBE:
        return ytMusicLogo;
      case DEEZER:
        return deezerLogo;
      default:
        return null;
    }
  };

  const getPlaceholder = (service) => {
    switch (service) {
      case SPOTIFY:
        return "https://open.spotify.com/track/29Key5Lj0YlIMH8JzRDy6U?si=aec423c3e57a4fe7";
      case YOUTUBE:
        return "https://music.youtube.com/watch?v=NlmezywdxPI&feature=share";
      case DEEZER:
        return "https://www.deezer.com/en/track/72160310?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=desktop&utm_content=track-72160310&deferredFl=1";
      default:
        return null;
    }
  };

  const generateUniversalLink = async () => {
    const urlTemplate = "http://localhost:3000/link";
    const facade = new Tune2GetherAPIFacade();
    console.log("Clicked");

    try {
      const response = await facade.getLinksFromServiceURL(
        inputRef.current.value
      );
      console.log(response);
      setUniversalLink(`${urlTemplate}/${response["universalId"]}`);
    } catch (err) {
      console.log(err);
      popUpError();
    }
  };

  const logosRef = React.useRef();
  const errorPopUpRef = React.useRef();
  const inputRef = React.useRef();

  const supportedServices = [SPOTIFY, YOUTUBE, DEEZER];
  const [selectedService, setSelectedService] = useState();
  const [isHowToOpen, setIsHowToOpen] = useState(false);

  return (
    <>
      <div className="errorPopUp" ref={errorPopUpRef}>
        Invalid URL
      </div>
      <HowToHelper
        SPOTIFY={SPOTIFY}
        YOUTUBE={YOUTUBE}
        DEEZER={DEEZER}
        supportedServices={supportedServices}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        isHowToOpen={isHowToOpen}
        setIsHowToOpen={setIsHowToOpen}
      />
      <div className="inputWrapper">
        <img
          className={`serviceLogo ${
            selectedService === SPOTIFY ? "shown" : ""
          }`}
          src={spotifyLogo}
          alt="spotifyLogo"
        />
        <img
          className={`serviceLogo ${
            selectedService === YOUTUBE ? "shown" : ""
          }`}
          src={ytMusicLogo}
          alt="ytMusicLogo"
        />
        <img
          className={`serviceLogo ${selectedService === DEEZER ? "shown" : ""}`}
          src={deezerLogo}
          alt="deezerLogo"
        />
        <input
          type="text"
          className="songInput"
          placeholder={`e.g: ${getPlaceholder(selectedService)}`}
          ref={inputRef}
        />
      </div>
      <button
        className={`generateLinkButton ${selectedService}`}
        onClick={() => generateUniversalLink()}
      >
        <p>Generate Universal Link</p>
      </button>
    </>
  );
};
