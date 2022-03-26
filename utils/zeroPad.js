export default function zeroPad(num) {
  return "00000000".slice(String(num).length) + num;
}
