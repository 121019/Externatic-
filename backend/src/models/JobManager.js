const AbstractManager = require("./AbstractManager");

class JobManager extends AbstractManager {
  constructor() {
    super({ table: "JobOffer" });
  }

  insert(JobOffer) {
    return this.database.query(
      `insert into ${this.table} (JobTitle, Description, Location, Upload_Date, Contract_Type, Enterprise_id, category ) values (?, ?, ?, ?, ?, ?,?)`,
      [
        JobOffer.JobTitle,
        JobOffer.Description,
        JobOffer.Location,
        JobOffer.UploadDate,
        JobOffer.ContractType,
        JobOffer.EnterpriseId,
        JobOffer.category,
      ]
    );
  }

  update(JobOffer) {
    return this.database.query(
      `update ${this.table} set JobTitle = ?, Description = ?, Location = ?, Upload_Date = ?, Contract_Type = ?, Enterprise_id = ? , category =?, where id = ?`,
      [
        JobOffer.JobTitle,
        JobOffer.Description,
        JobOffer.Location,
        JobOffer.UploadDate,
        JobOffer.ContractType,
        JobOffer.EnterpriseId,
        JobOffer.id,
        JobOffer.category,
      ]
    );
  }
}

module.exports = JobManager;
