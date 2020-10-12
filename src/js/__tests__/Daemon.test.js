import Daemon from '../Daemon';


test('Criating1 Daemon', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  const result = daemon;

  expect(result).toEqual({
    attack: 10, defence: 40, name: 'Andy', type: 'Daemon', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Criating2 Daemon', () => {
  try {
    new Daemon('Andy', 'Daeon');
  } catch (e) {
    expect(e.message).toEqual('Неверный тип персонажа: Daeon');
  }
});

test('Criating3 Daemon', () => {
  try {
    new Daemon('A', 'Daemon');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть больше 2х символов, а заданой длинной: 1');
  }
});

test('Criating4 Daemon', () => {
  try {
    new Daemon('Andyyyyyyyyyy', 'Daemon');
  } catch (e) {
    expect(e.message).toEqual('Имя персонажа должно быть меньше 10 символов, а заданой длинной: 13');
  }
});

test('LevelUp1 Daemon', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  daemon.levelUp();
  const result = daemon;

  expect(result).toEqual({
    attack: 12, defence: 48, name: 'Andy', type: 'Daemon', level: 2, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('LevelUp2 Daemon', () => {
  try {
    const daemon = new Daemon('Andy', 'Daemon');
    daemon.damage(1000);
    daemon.levelUp();
  } catch (e) {
    expect(e.message).toEqual('Нельзя повысить уровень умершему герою');
  }
});

test('Damage1 Daemon', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  daemon.damage(100);
  const result = daemon;

  expect(result).toEqual({
    attack: 10, defence: 40, name: 'Andy', type: 'Daemon', level: 1, health: 40, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
  });
});

test('Damage2 Daemon', () => {
  try {
    const daemon = new Daemon('Andy', 'Daemon');
    daemon.damage(1000);
    daemon.damage(1000);
  } catch (e) {
    expect(e.message).toEqual('Герой Andy мертв!');
  }
});
