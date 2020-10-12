import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);

    this.level = 1;
    this.health = 100;
    this.attack = 40;
    this.defence = 10;
  }

  levelUp() {
    super.levelUp();
  }

  damage(points) {
    super.damage(points);
  }
}
