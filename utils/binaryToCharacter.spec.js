import binaryToCharacter from "./binaryToCharacter";

describe("binaryToCharacter", () => {
  it("should convert a binary string to a character", () => {
    expect(binaryToCharacter("01111011")).toEqual("{");
  });
});
