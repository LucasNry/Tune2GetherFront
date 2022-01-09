import { useParams } from "react-router";
import { Tune2GetherAPIFacade } from "../../utils/Tune2GetherAPIFacade";
import spotifyLogo from "../../resources/Spotify logo.png";
import deezerLogo from "../../resources/Deezer logo.png";
import ytMusicLogo from "../../resources/YTMusic logo.png";
import { LinkComponent } from "../LinkComponent/LinkComponent";
import { useEffect, useState } from "react";
import "./LinkScreen.css";

export const LinkScreen = () => {
  const getServiceLogo = (serviceName) => {
    switch (serviceName) {
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

  const SPOTIFY = "spotify";
  const YOUTUBE = "youtube";
  const DEEZER = "deezer";
  const supportedServices = [SPOTIFY, YOUTUBE, DEEZER];

  const [urls, setUrls] = useState([]);

  const params = useParams();
  const universalId = params.universalId;
  const facade = new Tune2GetherAPIFacade();
  useEffect(() => {
    facade
      .getuniversalLinkFromId(universalId)
      .then((response) => setUrls(response));
  }, []);

  return (
    <div className="gridWrapper">
      <div className="grid">
        {supportedServices.map((service) => {
          if (urls[service] != null) {
            return (
              <LinkComponent
                serviceLogo={getServiceLogo(service)}
                url={urls[service]}
              />
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};
