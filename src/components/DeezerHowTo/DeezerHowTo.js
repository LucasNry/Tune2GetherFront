import "./DeezerHowTo.css";

import deezerThreeDots from "../../resources/Deezer-Three-Dots.png";
import deezerShareButton from "../../resources/Deezer-Share-Button.png";
import deezerCopyButton from "../../resources/Deezer-Copy-Button.png";
import deezerNewTab from "../../resources/Deezer-New-Tab-Paste.png";
import deezerCorrectLink from "../../resources/Deezer-Correct-Link.png";

export const DeezerHowTo = ({ close }) => {
  return (
    <div className="deezerWrapper">
      <span>
        1. After you've selected a track you wish to share, click the three dots
        towards the end
      </span>
      <img
        className="deezerThreeDots"
        src={deezerThreeDots}
        alt="deezerThreeDots"
      />
      <span>2. After that, hit the "Share" button</span>
      <img
        className="deezerShareButton"
        src={deezerShareButton}
        alt="deezerShareButton"
      />
      <span>3. Finally, hit the copy button</span>
      <img
        className="deezerCopyButton"
        src={deezerCopyButton}
        alt="deezerCopyButton"
      />
      <span>4. Once that is done, paste the copied link in a new tab</span>
      <img className="deezerNewTab" src={deezerNewTab} alt="deezerNewTab" />
      <span>
        5. When the page loads, copy the new link present in the address bar
      </span>
      <img
        className="deezerCorrectLink"
        src={deezerCorrectLink}
        alt="deezerCorrectLink"
      />
      <span>
        6. Then finally paste the copied link below and hit "Generate Universal
        Link"
      </span>
      <span className="close" onClick={() => close()}>
        Close
      </span>
    </div>
  );
};
