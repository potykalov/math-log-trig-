import MathCharacter from "./MathCharacter.js";

class Magician extends MathCharacter {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  }
}

export default Magician;
