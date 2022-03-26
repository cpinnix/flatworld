export default function hexToBinary(hex) {
  return parseInt(hex, 16).toString(2).padStart(8, "0");
}
