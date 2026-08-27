import Daemon from "../Daemon.js";
import MathCharacter from "../MathCharacter.js";

describe("MathCharacter", () => {
  it("get stoned", () => {
    const daemon = new Daemon("Dmitriy");

    const received = daemon.stoned;

    expect(received).toBeFalsy();
  });

  it("set stoned", () => {
    const daemon = new Daemon("Dmitriy");

    daemon.stoned = true;

    const received = daemon.stoned;

    expect(received).toBeTruthy();
  });

  it("get attack with stoned and distance", () => {
    const daemon = new Daemon("Dmitriy");

    daemon.stoned = true;
    daemon.distance = 2;

    const received = daemon.attack;

    expect(received).toBe(4);
  });

  it("get attack without stoned and with distance", () => {
    const daemon = new Daemon("Dmitriy");

    daemon.distance = 2;

    const received = daemon.attack;

    expect(received).toBe(9);
  });
});
