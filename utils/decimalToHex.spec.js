import decimalToHex from "./decimalToHex";

describe("decimalToHex", () => {
  it("should convert a number to a hex string", () => {
    expect(decimalToHex(123)).toEqual("7B");
    expect(decimalToHex(34)).toEqual("22");
    expect(decimalToHex(0)).toEqual("0");
  });
});
