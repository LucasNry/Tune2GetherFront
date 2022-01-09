export const copyToClipboard = (url) => {
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Copied url to clipboard"))
    .catch((err) => console.log(err));
};

export const getCookie = (cookieName) => {
  const name = cookieName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");

  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });

  return res;
};
