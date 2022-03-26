import decimalToHex from "./decimalToHex";
import hexToBinary from "./hexToBinary";
import binaryToCharacter from "./binaryToCharacter";

export default function pixelArrayToObject(pixelArray) {
  let index = 0;
  let currentRgba = [];
  const rgba = [];

  while (currentRgba !== null) {
    if (currentRgba) {
      currentRgba.push(pixelArray[index]);
    }

    if (currentRgba.length === 4) {
      if (currentRgba[3] === 0) {
        currentRgba = null;
      } else {
        rgba.push(currentRgba[0]);
        currentRgba = [];
      }
    }

    index++;
  }

  const hexArray = rgba.map(decimalToHex);
  const binaryArray = hexArray.map(hexToBinary);
  const characterArray = binaryArray.map(binaryToCharacter);
  const json = characterArray.join("");

  const metadata = JSON.parse(json);

  return metadata;
}
