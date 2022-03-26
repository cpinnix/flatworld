import hexToBinary from "./hexToBinary";

describe("hexToBinary", () => {
  it("should convert a hex string to a binary string properly", () => {
    expect(hexToBinary("7B")).toEqual("01111011");
  });
});
