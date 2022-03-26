import characterToBinary from "./characterToBinary";

describe("characterToBinary", () => {
  it("should convert a character to a binary string", () => {
    expect(characterToBinary("{")).toEqual("01111011");
  });
});
