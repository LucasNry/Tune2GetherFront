import "./YTMusicHowTo.css";

import youtubeThreeDots from "../../resources/YTMusic-Three-Dots.png";
import youtubeShare from "../../resources/YTMusic-Share.png";
import youtubeShareScreen from "../../resources/YTMusic-Share-Screen.png";

export const YTMusicHowTo = ({ close }) => {
  return (
    <div className="ytWrapper">
      <span>
        1. After you've selected a track you wish to share, hover over it and
        click the three dots towards the end
      </span>
      <br />
      <img
        className="youtubeThreeDots"
        src={youtubeThreeDots}
        alt="youtubeThreeDots"
      />
      <br />
      <span>2. After that, hit the "Share" button</span>
      <br />
      <img className="youtubeShare" src={youtubeShare} alt="youtubeShare" />
      <br />
      <span>3. Finally, hit the copy button</span>
      <br />
      <img
        className="youtubeShareScreen"
        src={youtubeShareScreen}
        alt="youtubeShareScreen"
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
