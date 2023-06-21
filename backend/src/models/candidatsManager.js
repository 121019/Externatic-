const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "Candidats" });
  }

  insert(item) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      item.title,
    ]);
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = CandidatManager;
