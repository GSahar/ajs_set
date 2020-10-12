import Bowerman from '../Bowerman';


test('Criating1 Bowerman', () => {
  const bowerman = new Bowerman('Andy', 'Bowerman');
  const result = bowerman;

  expect(result).toEqual({
    attack: 25, defence: 25, name: 'Andy', type: 'Bowerman', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Bowerman', () => {
  try {
    new Bowerman('Andy', 'Bowermn');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Bowermn');
  }
});

test('Criating3 Bowerman', () => {
  try {
    new Bowerman('A', 'Bowerman');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Bowerman', () => {
  try {
    new Bowerman('Andyyyyyyyyyy', 'Bowerman');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});


test('LevelUp1 Bowerman', () => {
  const bowerman = new Bowerman('Andy', 'Bowerman');
  bowerman.levelUp();
  const result = bowerman;

  expect(result).toEqual({
    attack: 30, defence: 30, name: 'Andy', type: 'Bowerman', level: 2, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('LevelUp2 Bowerman', () => {
  try {
    const bowerman = new Bowerman('Andy', 'Bowerman');
    bowerman.damage(1000);
    bowerman.levelUp();
  } catch (e) {
    expect(e.message).toEqual('Нельзя повысить уровень умершему герою');
  }
});

test('Damage1 Bowerman', () => {
  const bowerman = new Bowerman('Andy', 'Bowerman');
  bowerman.damage(100);
  const result = bowerman;

  expect(result).toEqual({
    attack: 25, defence: 25, name: 'Andy', type: 'Bowerman', level: 1, health: 25, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Damage2 Bowerman', () => {
  try {
    const bowerman = new Bowerman('Andy', 'Bowerman');
    bowerman.damage(1000);
    bowerman.damage(1000);
  } catch (e) {
    expect(e.message).toEqual('Герой Andy мертв!');
  }
});
