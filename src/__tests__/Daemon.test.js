import Daemon from "../Daemon.js";

describe("Daemon", () => {
  it("return object of character Daemon", () => {
    const expected = {
      name: "Mark",
      type: "Daemon",
      health: 100,
      level: 1,
      defence: 40,
      distance: 1,
      _attack: 10,
      _stoned: false,
    };
    const received = new Daemon("Mark");

    expect(received).toEqual(expected);
  });
});
