const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "Candidats" });
  }

  insert(candidat) {
    return this.database.query(
      `INSERT INTO ${this.table} (Name, Email, Password, CV, Adress, City, Postcode, Phone, Admin_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        candidat.Name,
        candidat.Email,
        candidat.Password,
        candidat.CV,
        candidat.Adress,
        candidat.City,
        candidat.Postcode,
        candidat.Phone,
        candidat.Admin_id,
      ]
    );
  }

  update(candidat) {
    return this.database.query(
      `UPDATE ${this.table} SET Name = ?, Email = ?, Password = ?, CV = ?, Adress = ?, City = ?, Postcode = ?, Phone = ? WHERE id = ?`,
      [
        candidat.Name,
        candidat.Email,
        candidat.Password,
        candidat.CV,
        candidat.Adress,
        candidat.City,
        candidat.Postcode,
        candidat.Phone,
        candidat.id,
      ]
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
