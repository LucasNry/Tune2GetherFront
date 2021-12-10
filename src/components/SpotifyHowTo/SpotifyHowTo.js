import "./SpotifyHowTo.css";

import spotifyThreeDots from "../../resources/Spotify-Three-Dots.png";
import spotifyCopySongButton from "../../resources/Spotify-Copy-Song-Button.png";

export const SpotifyHowTo = ({ close }) => {
  return (
    <div className="spotifyWrapper">
      <span>
        1. After you've selected a track you wish to share, hover over it and
        click the three dots towards the end
      </span>
      <br />
      <img
        className="spotifyThreeDots"
        src={spotifyThreeDots}
        alt="spotifyThreeDots"
      />
      <br />
      <span>
        2. After that, hover over the "Share" option and click "Copy Song Link"
      </span>
      <br />
      <img
        className="spotifyCopySongButton"
        src={spotifyCopySongButton}
        alt="spotifyCopySongButton"
      />
      <br />
      <span>
        3. Once that is done simply paste the copied link below and hit
        "Generate Universal Link"
      </span>
      <br />
      <br />
      <span className="close" onClick={() => close()}>
        Close
      </span>
    </div>
  );
};
