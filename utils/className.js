export default function className(...args) {
  return args.filter((arg) => arg).join(" ");
}
