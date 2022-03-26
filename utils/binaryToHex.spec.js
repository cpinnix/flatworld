import binaryToHex from "./binaryToHex";

describe("binaryToHex", () => {
  it("should convert a binary string to a hex string", () => {
    expect(binaryToHex("01111011")).toEqual("7B");
  });
});
