import { ReadOnlyInput } from "../ReadOnlyInput/ReadOnlyInput";
import { CopyButton } from "../CopyButton/CopyButton";
import "./LinkDisplay.css";

export const LinkDisplay = ({ universalLink, setUniversalLink }) => {
  return (
    <div className="universalLinkWrapper">
      <ReadOnlyInput url={universalLink} />
      <CopyButton url={universalLink} />
      <button onClick={() => setUniversalLink(null)}>Go Back</button>
    </div>
  );
};
