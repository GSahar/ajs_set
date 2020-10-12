import Undead from '../Undead';


test('Criating1 Undead', () => {
  const undead = new Undead('Andy', 'Undead');
  const result = undead;

  expect(result).toEqual({
    attack: 25, defence: 25, name: 'Andy', type: 'Undead', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Undead', () => {
  try {
    new Undead('Andy', 'Unded');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Unded');
  }
});

test('Criating3 Undead', () => {
  try {
    new Undead('A', 'Undead');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Undead', () => {
  try {
    new Undead('Andyyyyyyyyyy', 'Undead');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});

test('LevelUp1 Undead', () => {
  const undead = new Undead('Andy', 'Undead');
  undead.levelUp();
  const result = undead;

  expect(result).toEqual({
    attack: 30, defence: 30, name: 'Andy', type: 'Undead', level: 2, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('LevelUp2 Undead', () => {
  try {
    const undead = new Undead('Andy', 'Undead');
    undead.damage(1000);
    undead.levelUp();
  } catch (e) {
    expect(e.message).toEqual('Нельзя повысить уровень умершему герою');
  }
});

test('Damage1 Undead', () => {
  const undead = new Undead('Andy', 'Undead');
  undead.damage(100);
  const result = undead;

  expect(result).toEqual({
    attack: 25, defence: 25, name: 'Andy', type: 'Undead', level: 1, health: 25, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Damage2 Undead', () => {
  try {
    const undead = new Undead('Andy', 'Undead');
    undead.damage(1000);
    undead.damage(1000);
  } catch (e) {
    expect(e.message).toEqual('Герой Andy мертв!');
  }
});
