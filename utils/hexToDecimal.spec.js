import hexToDecimal from "./hexToDecimal";

describe("hexToDecimal", () => {
  it("should convert a hex string to a decimal number", () => {
    expect(hexToDecimal("7B")).toEqual(123);
  });
});
