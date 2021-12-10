import { SpotifyHowTo } from "../SpotifyHowTo/SpotifyHowTo";
import { YTMusicHowTo } from "../YTMusicHowTo/YTMusicHowTo";
import { DeezerHowTo } from "../DeezerHowTo/DeezerHowTo";
import React, { useEffect } from "react";
import { SPOTIFY, YOUTUBE, DEEZER } from "../../constants/Services";
import "./HowToHelper.css";

export const HowToHelper = ({
  setSelectedService,
  supportedServices,
  setIsHowToOpen,
  isHowToOpen,
  selectedService,
}) => {
  const selectRef = React.useRef();
  useEffect(() => setSelectedService(selectRef.current.value), []);

  return (
    <>
      <select
        onChange={(e) => setSelectedService(e.target.value)}
        ref={selectRef}
        className="serviceSelect"
      >
        {supportedServices.map((service) => (
          <option value={service}>{service}</option>
        ))}
      </select>
      <span
        className="howToText"
        onClick={() => setIsHowToOpen(true)}
        style={{
          display: `${isHowToOpen ? "none" : "inline"}`,
        }}
      >
        How to generate a universal link?
      </span>
      <br />
      <div className={`howToWrapper ${isHowToOpen ? "" : "hidden"}`}>
        {selectedService === SPOTIFY ? (
          <SpotifyHowTo close={() => setIsHowToOpen(false)} />
        ) : null}
        {selectedService === YOUTUBE ? (
          <YTMusicHowTo close={() => setIsHowToOpen(false)} />
        ) : null}
        {selectedService === DEEZER ? (
          <DeezerHowTo close={() => setIsHowToOpen(false)} />
        ) : null}
      </div>
    </>
  );
};
