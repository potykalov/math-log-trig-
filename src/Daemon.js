import MathCharacter from "./MathCharacter.js";

class Daemon extends MathCharacter {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}

export default Daemon;
