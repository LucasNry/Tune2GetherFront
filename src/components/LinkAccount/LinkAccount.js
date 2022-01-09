import "./LinkAccount.css";
import { LinkService } from "../LinkService/LinkService";
import spotifyLogo from "../../resources/Spotify logo.png";
import deezerLogo from "../../resources/Deezer logo.png";
import ytMusicLogo from "../../resources/YTMusic logo.png";
import axios from "axios";
import { useEffect, useState } from "react";

export const LinkAccount = () => {
  const getLinkInfo = () => {
    try {
      return axios.get("http://localhost:8080/user/links", {
        withCredentials: true,
      });
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const [linkedInfo, setLinkedInfo] = useState({});
  useEffect(() => {
    getLinkInfo().then((response) => {
      setLinkedInfo(response.data);
    });
  }, []);

  return (
    <div className="linkComponentWrapper">
      <LinkService
        logo={spotifyLogo}
        serviceName="Spotify"
        endpoint="/connect/spotify"
        isServiceLinked={linkedInfo["spotify"]}
      />
      <LinkService
        logo={ytMusicLogo}
        serviceName="Youtube"
        endpoint="/connect/youtube"
        isServiceLinked={linkedInfo["youtube"]}
      />
      <LinkService
        logo={deezerLogo}
        serviceName="Deezer"
        endpoint="/connect/deezer"
        isServiceLinked={linkedInfo["deezer"]}
      />
    </div>
  );
};
