import Magician from "../Magician.js";

describe("Magician", () => {
  it("return object of character Magician", () => {
    const expected = {
      name: "Anton",
      type: "Magician",
      health: 100,
      level: 1,
      defence: 40,
      distance: 1,
      _attack: 10,
      _stoned: false,
    };
    const received = new Magician("Anton");

    expect(received).toEqual(expected);
  });
});
