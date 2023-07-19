const { verifyPassword } = require("../services/auth");
const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "Candidats" });
  }

  insert(candidat) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, hashedpassword, cv, adress, city, postcode, phone) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        candidat.firstname,
        candidat.lastname,
        candidat.email,
        candidat.hashedpassword,
        candidat.cv,
        candidat.adress,
        candidat.city,
        candidat.postcode,
        candidat.phone,
      ]
    );
  }

  findByUsernameWithHashedPassword(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  find(id) {
    return this.database.query(
      `SELECT firstname, lastname, email, cv, adress, city, postcode, phone FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  findByName(name) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE name = ?`, [
      name,
    ]);
  }

  async update(candidat) {
    let query;
    if (candidat.password === "") {
      query = this.database.query(
        `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, cv = ?, adress = ?, city = ?, postcode = ?, phone = ? WHERE id = ?`,
        [
          candidat.firstname,
          candidat.lastname,
          candidat.email,
          candidat.cv,
          candidat.adress,
          candidat.city,
          candidat.postcode,
          candidat.phone,
          candidat.id,
        ]
      );
    } else {
      query = this.database.query(
        `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, password = ?, cv = ?, adress = ?, city = ?, postcode = ?, phone = ? WHERE id = ?`,
        [
          candidat.firstname,
          candidat.lastname,
          candidat.email,
          candidat.hashedPassword,
          candidat.cv,
          candidat.adress,
          candidat.city,
          candidat.postcode,
          candidat.phone,
          candidat.id,
        ]
      );
    }
    return query;
  }

  sendCv(id, cv) {
    return this.database.query(`UPDATE ${this.table} SET cv = ? WHERE id = ?`, [
      cv,
      id,
    ]);
  }

  async updateCv(id, cv) {
    return this.database.query(`UPDATE ${this.table} SET cv = ? WHERE id = ?`, [
      cv,
      id,
    ]);
  }

  async verifyUserPassword(email, password) {
    const [rows] = await this.findByUsernameWithHashedPassword(email);

    if (!rows[0]) {
      console.error("Candidat not found");
      return false;
    }

    const candidat = rows[0];

    const isPasswordValid = await verifyPassword(candidat.password, password);

    return isPasswordValid;
  }
}

module.exports = CandidatManager;
