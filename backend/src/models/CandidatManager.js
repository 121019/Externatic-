const bcrypt = require("bcryptjs");
const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "Candidats" });
  }

  insert(candidat) {
    const hashedPassword = bcrypt.hashSync(candidat.password, 10);

    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, password, cv, adress, city, postcode, phone) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        candidat.firstname,
        candidat.lastname,
        candidat.email,
        hashedPassword,
        candidat.cv,
        candidat.adress,
        candidat.city,
        candidat.postcode,
        candidat.phone,
      ]
    );
  }

  findByName(name) {
    return this.database.query(`SELECT * from ${this.table} where email = ?`, [
      name,
    ]);
  }

  update(candidat) {
    // Hash the new password with bcrypt before storing
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(candidat.password, salt);

    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ? , email = ?, password = ?, cv = ?, adress = ?, city = ?, postcode = ?, phone = ? WHERE id = ?`,
      [
        candidat.firstname,
        candidat.lastname,
        candidat.email,
        hashpassword, // Storing hashed password
        candidat.cv,
        candidat.adress,
        candidat.city,
        candidat.postcode,
        candidat.phone,
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
