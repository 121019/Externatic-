const AbstractManager = require("./AbstractManager");

class JobManager extends AbstractManager {
  constructor() {
    super({ table: "JobOffer" });
  }

  insert(JobOffer) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      JobOffer.title,
    ]);
  }

  update(JobOffer) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [JobOffer.title, JobOffer.id]
    );
  }
}

module.exports = JobManager;
