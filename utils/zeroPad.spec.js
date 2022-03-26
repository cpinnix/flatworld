import zeroPad from "./zeroPad";

describe("zeroPad", () => {
  it("should add a zero at the beginning", () => {
    expect(zeroPad("1111111")).toEqual("01111111");
  });
});
