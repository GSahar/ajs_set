import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);

    this.level = 1;
    this.health = 100;
    this.attack = 25;
    this.defence = 25;
  }

  levelUp() {
    super.levelUp();
  }

  damage(points) {
    super.damage(points);
  }
}
