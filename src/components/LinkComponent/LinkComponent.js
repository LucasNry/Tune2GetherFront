import React from "react";
import "./LinkComponent.css";
import { CopyButton } from "../CopyButton/CopyButton";
import { ReadOnlyInput } from "../ReadOnlyInput/ReadOnlyInput";

export const LinkComponent = ({ serviceLogo, url }) => {
  return (
    <div className="linkWrapper">
      <img
        className="streamingServicesLogo"
        src={serviceLogo}
        alt="serviceLogo"
      />
      <ReadOnlyInput url={url} />
      <CopyButton url={url} />
    </div>
  );
};
