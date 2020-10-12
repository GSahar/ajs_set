import ValidateError from './ValidateError';

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];


    if (this.types.indexOf(this.type) === -1) {
      this.getError(`Неверный тип персонажа: ${this.type}`);
    }

    if (this.name.length < 2) {
      this.getError(`Имя персонажа должно быть больше 2х символов, а заданой длинной: ${this.name.length}`);
    } else if (this.name.length > 10) {
      this.getError(`Имя персонажа должно быть меньше 10 символов, а заданой длинной: ${this.name.length}`);
    }
  }

  getError(message) {
    throw new ValidateError(message);
  }

  levelUp() {
    if (this.health <= 0) {
      this.getError('Нельзя повысить уровень умершему герою');
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      this.getError(`Герой ${this.name} мертв!`);
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
