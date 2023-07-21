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
    return this.database(
      `UPDATE ${this.table} SET JobTitle = ?, Description = ?, Location = ?, Upload_Date = ?, Contract_Type = ?, Enterprise_id = ?, category = ? WHERE id = ?`,
      [
        JobOffer.JobTitle,
        JobOffer.Description,
        JobOffer.Location,
        JobOffer.UploadDate,
        JobOffer.ContractType,
        JobOffer.EnterpriseId,
        JobOffer.category,
        JobOffer.id,
      ]
    );
  }

  fetchJobOffersByEnterpriseId(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE Enterprise_id  = ?`,
      [id]
    );
    // .then(([rows]) => rows)
    // .catch((err) => {
    //   throw err;
    // });
  }
}

module.exports = JobManager;
