export default function textToBinaryArray(text) {
  return text.split("").map((char) => char.charCodeAt(0).toString(2));
}
