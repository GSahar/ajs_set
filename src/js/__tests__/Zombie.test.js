import Zombie from '../Zombie';


test('Criating1 Zombie', () => {
  const zombie = new Zombie('Andy', 'Zombie');
  const result = zombie;

  expect(result).toEqual({
    attack: 40, defence: 10, name: 'Andy', type: 'Zombie', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Zombie', () => {
  try {
    new Zombie('Andy', 'Zombi');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Zombi');
  }
});

test('Criating3 Zombie', () => {
  try {
    new Zombie('A', 'Zombie');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Zombie', () => {
  try {
    new Zombie('Andyyyyyyyyyy', 'Zombie');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});

test('LevelUp1 Zombie', () => {
  const zombie = new Zombie('Andy', 'Zombie');
  zombie.levelUp();
  const result = zombie;

  expect(result).toEqual({
    attack: 48, defence: 12, name: 'Andy', type: 'Zombie', level: 2, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('LevelUp2 Zombie', () => {
  try {
    const zombie = new Zombie('Andy', 'Zombie');
    zombie.damage(1000);
    zombie.levelUp();
  } catch (e) {
    expect(e.message).toEqual('Нельзя повысить уровень умершему герою');
  }
});

test('Damage1 Zombie', () => {
  const zombie = new Zombie('Andy', 'Zombie');
  zombie.damage(100);
  const result = zombie;

  expect(result).toEqual({
    attack: 40, defence: 10, name: 'Andy', type: 'Zombie', level: 1, health: 10, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Damage2 Zombie', () => {
  try {
    const zombie = new Zombie('Andy', 'Zombie');
    zombie.damage(1000);
    zombie.damage(1000);
  } catch (e) {
    expect(e.message).toEqual('Герой Andy мертв!');
  }
});
