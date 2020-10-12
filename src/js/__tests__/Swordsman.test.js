import Swordsman from '../Swordsman';


test('Criating1 Swordsman', () => {
  const swordsman = new Swordsman('Andy', 'Swordsman');
  const result = swordsman;

  expect(result).toEqual({
    attack: 40, defence: 10, name: 'Andy', type: 'Swordsman', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Swordsman', () => {
  try {
    new Swordsman('Andy', 'Sworsman');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Sworsman');
  }
});

test('Criating3 Swordsman', () => {
  try {
    new Swordsman('A', 'Swordsman');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Swordsman', () => {
  try {
    new Swordsman('Andyyyyyyyyyy', 'Swordsman');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});

test('LevelUp1 Swordsman', () => {
  const swordsman = new Swordsman('Andy', 'Swordsman');
  swordsman.levelUp();
  const result = swordsman;

  expect(result).toEqual({
    attack: 48, defence: 12, name: 'Andy', type: 'Swordsman', level: 2, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('LevelUp2 Swordsman', () => {
  try {
    const swordsman = new Swordsman('Andy', 'Swordsman');
    swordsman.damage(1000);
    swordsman.levelUp();
  } catch (e) {
    expect(e.message).toEqual('Нельзя повысить уровень умершему герою');
  }
});

test('Damage1 Swordsman', () => {
  const swordsman = new Swordsman('Andy', 'Swordsman');
  swordsman.damage(100);
  const result = swordsman;

  expect(result).toEqual({
    attack: 40, defence: 10, name: 'Andy', type: 'Swordsman', level: 1, health: 10, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Damage2 Swordsman', () => {
  try {
    const swordsman = new Swordsman('Andy', 'Swordsman');
    swordsman.damage(1000);
    swordsman.damage(1000);
  } catch (e) {
    expect(e.message).toEqual('Герой Andy мертв!');
  }
});
