export const copyToClipboard = (url) => {
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Copied url to clipboard"))
    .catch((err) => console.log(err));
};
