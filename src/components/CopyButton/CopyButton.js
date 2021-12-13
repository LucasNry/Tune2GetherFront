import "./CopyButton.css";
import { copyToClipboard } from "../../utils/HelperFunctions";

export function CopyButton({ url }) {
  return (
    <button className="copyButton" onClick={() => copyToClipboard(url)}>
      Copy
    </button>
  );
}
