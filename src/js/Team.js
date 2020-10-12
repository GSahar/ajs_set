
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(object, multy) {
    if (this.members.has(object) && !multy) {
      throw new Error('Дублирование героев запрещено');
    }
    this.members.add(object);
  }

  addAll(...params) {
    for (const item of params) {
      this.add(item, true);
    }

    // console.log(this.members);
  }

  toArray() {
    return Array.from(this.members);
  }
}
