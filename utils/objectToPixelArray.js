import textToBinaryArray from "./textToBinaryArray";
import binaryToHex from "./binaryToHex";
import hexToDecimal from "./hexToDecimal";

export default function objectToPixelArray(data, width, height) {
  const json = JSON.stringify(data);
  const binaryArray = textToBinaryArray(json);
  const hexArray = binaryArray.map(binaryToHex);
  const decimalArray = hexArray.map(hexToDecimal);

  const rgba = decimalArray
    .map((decimal) => [decimal, decimal, decimal, 255])
    .reduce((arr, agg) => [...arr, ...agg], []);

  const dataLength = width * height * 4;

  const tail = new Array(dataLength - rgba.length).fill(0);

  const pixelArray = [...rgba, ...tail];

  return pixelArray;
}
