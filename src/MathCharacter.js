import Character from "./Character.js";

class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.stoned = false;
    this.distance = 1;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let attack = this._attack * (1 - (this.distance - 1) * 0.1);

    if (this.stoned) {
      return Math.round(attack - Math.log2(this.distance) * 5);
    }

    return Math.round(attack);
  }

  set attack(value) {
    this._attack = value;
  }
}

export default MathCharacter;
