// TODO: write your code here
import Team from './Team';
import Bowerman from './Bowerman';
import Daemon from './Daemon';
import Magician from './Magician';

const dreamTeam = new Team();
const myltyDreamTeam = new Team();

try {
  const bowerman = new Bowerman('Andy', 'Bowerman');

  const daemon = new Daemon('Petya', 'Daemon');

  const magician = new Magician('Vasya', 'Magician');

  dreamTeam.add(daemon);
  dreamTeam.add(bowerman);
  dreamTeam.add(magician);

  myltyDreamTeam.addAll(daemon, bowerman, magician, daemon, bowerman, magician);
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}
