const bcrypt = require("bcryptjs");
const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "Candidats" });
  }

  insert(candidat) {
    const hashedPassword = bcrypt.hashSync(candidat.Password, 10);

    return this.database.query(
      `INSERT INTO ${this.table} (FirstName, LastName, Email, Password, CV, Adress, City, Postcode, Phone) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        candidat.FirstName,
        candidat.LastName,
        candidat.Email,
        hashedPassword,
        candidat.CV,
        candidat.Adress,
        candidat.City,
        candidat.Postcode,
        candidat.Phone,
      ]
    );
  }

  findByName(name) {
    return this.database.query(`SELECT * from ${this.table} where Email = ?`, [
      name,
    ]);
  }

  update(candidat) {
    // Hash the new password with bcrypt before storing
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(candidat.Password, salt);

    return this.database.query(
      `UPDATE ${this.table} SET FirstName = ?, LastName = ? , Email = ?, Password = ?, CV = ?, Adress = ?, City = ?, Postcode = ?, Phone = ? WHERE id = ?`,
      [
        candidat.FirstName,
        candidat.LastName,
        candidat.Email,
        hashedPassword, // Storing hashed password
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
