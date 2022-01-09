import spotifyLogo from "../../resources/Spotify logo.png";
import deezerLogo from "../../resources/Deezer logo.png";
import ytMusicLogo from "../../resources/YTMusic logo.png";
import "./LinkCreator.css";
import React, { useState } from "react";
import { Tune2GetherAPIFacade } from "../../utils/Tune2GetherAPIFacade";
import { SPOTIFY, YOUTUBE, DEEZER } from "../../constants/Services";
import { TRACK, PLAYLIST } from "../../constants/SharedItemTypes";
import { HowToHelper } from "../HowToHelper/HowToHelper";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { PopUp } from "../PopUp/PopUp";

export const LinkCreator = ({ setUniversalLink }) => {
  const getLogo = () => {
    switch (selectedService) {
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

  const getPlaceholder = () => {
    switch (sharedItemType) {
      case PLAYLIST:
        switch (selectedService) {
          case SPOTIFY:
            return "https://open.spotify.com/album/3HNnxK7NgLXbDoxRZxNWiR?si=wdqrdUJgSySi6DK9-UygjQps";
          case YOUTUBE:
            return "https://music.youtube.com/playlist?list=OLAK5uy_kRVaDLvDemKrwYjkdUTryKHIyQa_RiiPo&feature=share";
          case DEEZER:
            return "https://www.deezer.com/br/album/72000342?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=desktop&utm_content=album-72000342&deferredFl=1";
          default:
            return null;
        }
      case TRACK:
      default:
        switch (selectedService) {
          case SPOTIFY:
            return "https://open.spotify.com/track/29Key5Lj0YlIMH8JzRDy6U?si=aec423c3e57a4fe7";
          case YOUTUBE:
            return "https://music.youtube.com/watch?v=NlmezywdxPI&feature=share";
          case DEEZER:
            return "https://www.deezer.com/en/track/72160310?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=desktop&utm_content=track-72160310&deferredFl=1";
          default:
            return null;
        }
    }
  };

  const generateUniversalLink = () => {
    let urlTemplate = "http://localhost:3000/link";

    const facade = new Tune2GetherAPIFacade();
    facade
      .getLinksFromServiceURL(inputRef.current.value, sharedItemType)
      .then((response) => {
        setIsLoading(false);

        if (sharedItemType === TRACK) {
          setUniversalLink(`${urlTemplate}/${response["id"]}`);
        } else {
          setHasPlaylistBeenCreated(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data["message"]);
        setIsLoading(false);
      });

    setIsLoading(true);
    switch (sharedItemType) {
      case PLAYLIST:
        setLoadingMessage("Creating playlist");
        break;
      case TRACK:
      default:
        setLoadingMessage("Fetching song");
    }
  };

  const inputRef = React.useRef();

  const supportedServices = [SPOTIFY, YOUTUBE, DEEZER];
  const [sharedItemType, setSharedItemType] = useState(TRACK);
  const [selectedService, setSelectedService] = useState();
  const [hasPlaylistBeenCreated, setHasPlaylistBeenCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHowToOpen, setIsHowToOpen] = useState(false);
  const [error, setError] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  return (
    <>
      <LoadingScreen optionalText={loadingMessage} isLoading={isLoading} />
      <PopUp
        shouldPop={hasPlaylistBeenCreated}
        setShouldPop={setHasPlaylistBeenCreated}
        text={
          "The playlist have been created on your preferred streaming service"
        }
        backgroundColor="green"
      />
      <PopUp
        shouldPop={error}
        setShouldPop={setError}
        text={error}
        backgroundColor="red"
      />
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
        <select
          className="itemTypeSelect"
          onChange={(e) => setSharedItemType(e.target.value)}
        >
          <option value={TRACK}>Track</option>
          <option value={PLAYLIST}>Playlist</option>
        </select>
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
