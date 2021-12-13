import "./Home.css";
import { LinkCreator } from "../LinkCreator/LinkCreator";
import { LinkDisplay } from "../LinkDisplay/LinkDisplay";
import { useEffect, useState } from "react";
import { copyToClipboard } from "../../utils/HelperFunctions";

export const Home = () => {
  const [universalLink, setUniversalLink] = useState(null);
  useEffect(() => {
    if (universalLink) copyToClipboard(universalLink);
  }, [universalLink]);

  return (
    <>
      {universalLink ? (
        <LinkDisplay
          setUniversalLink={setUniversalLink}
          universalLink={universalLink}
        />
      ) : (
        <LinkCreator setUniversalLink={setUniversalLink} />
      )}
    </>
  );
};
