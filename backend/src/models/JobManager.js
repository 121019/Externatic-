const AbstractManager = require("./AbstractManager");

class JobManager extends AbstractManager {
  constructor() {
    super({ table: "JobOffer" });
  }

  insert(JobOffer) {
    return this.database.query(
      `insert into ${this.table} (JobTitle, Description, Location, Upload_Date, Contract_Type, Enterprise_id) values (?, ?, ?, ?, ?, ?)`,
      [
        JobOffer.JobTitle,
        JobOffer.Description,
        JobOffer.Location,
        JobOffer.Upload_Date,
        JobOffer.Contract_Type,
        JobOffer.Enterprise_id,
      ]
    );
  }

  update(JobOffer) {
    return this.database.query(
      `update ${this.table} set JobTitle = ?, Description = ?, Location = ?, Upload_Date = ?, Contract_Type = ?, Enterprise_id = ?  where id = ?`,
      [
        JobOffer.JobTitle,
        JobOffer.Description,
        JobOffer.Location,
        JobOffer.Upload_Date,
        JobOffer.Contract_Type,
        JobOffer.Enterprise_id,
        JobOffer.id,
      ]
    );
  }
}

module.exports = JobManager;
