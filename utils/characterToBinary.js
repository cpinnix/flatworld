import zeroPad from "./zeroPad";

export default function characterToBinary(character) {
  return zeroPad(character.charCodeAt().toString(2));
}
