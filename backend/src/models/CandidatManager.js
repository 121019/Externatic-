const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "Candidats" });
  }

  insert(candidat) {
    return this.database.query(
      `INSERT INTO ${this.table} (FirstName,LastName, Email, Password, CV, Adress, City, Postcode, Phone) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        candidat.FirstName,
        candidat.LastName,
        candidat.Email,
        candidat.Password,
        candidat.CV,
        candidat.Adress,
        candidat.City,
        candidat.Postcode,
        candidat.Phone,
      ]
    );
  }

  update(candidat) {
    return this.database.query(
      `UPDATE ${this.table} SET FirstName = ?, LastName = ? , Email = ?, Password = ?, CV = ?, Adress = ?, City = ?, Postcode = ?, Phone = ? WHERE id = ?`,
      [
        candidat.FirstName,
        candidat.LastName,
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
