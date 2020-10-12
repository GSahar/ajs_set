import Team from '../Team';
import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';

test('added to team', () => {
  const dreamTeam = new Team();
  const deamon = new Daemon('test', 'Daemon');
  const bowerman = new Bowerman('test1', 'Bowerman');

  dreamTeam.add(deamon);
  dreamTeam.add(bowerman);
  const result = dreamTeam.toArray();

  expect(result).toEqual([
    {
      attack: 10, defence: 40, name: 'test', type: 'Daemon', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
    },
    {
      attack: 25, defence: 25, name: 'test1', type: 'Bowerman', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
    },
  ]);
});

test('add to team1', () => {
  try {
    const dreamTeam = new Team();
    const deamon = new Daemon('test', 'Daemon');

    dreamTeam.add(deamon);
    dreamTeam.add(deamon);
  } catch (e) {
    expect(e.message).toEqual('Дублирование героев запрещено');
  }
});

test('multi add to team', () => {
  const dreamTeam = new Team();
  const deamon = new Daemon('test', 'Daemon');
  const bowerman = new Bowerman('test1', 'Bowerman');
  const magician = new Magician('test2', 'Magician');

  dreamTeam.addAll(deamon, bowerman, magician, magician);
  const result = dreamTeam.toArray();

  expect(result).toEqual([
    {
      attack: 10, defence: 40, name: 'test', type: 'Daemon', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
    },
    {
      attack: 25, defence: 25, name: 'test1', type: 'Bowerman', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
    },
    {
      attack: 10, defence: 40, name: 'test2', type: 'Magician', level: 1, health: 100, types: ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
    },
  ]);
});
