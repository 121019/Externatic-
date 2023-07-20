const {
  hashPassword,
  verifyPassword,
  hashPasswordManual,
} = require("../services/auth");

const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "Candidats" });
  }

  async insert(candidat) {
    const hashedPassword = await hashPasswordManual(candidat.password);

    const newCandidat = { ...candidat, password: hashedPassword };

    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, password, cv, adress, city, postcode, phone) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        newCandidat.firstname,
        newCandidat.lastname,
        newCandidat.email,
        newCandidat.password,
        newCandidat.cv,
        newCandidat.adress,
        newCandidat.city,
        newCandidat.postcode,
        newCandidat.phone,
      ]
    );
  }

  findByEmail(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  findByName(name) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE name = ?`, [
      name,
    ]);
  }

  async update(candidat) {
    const hashedPassword = await hashPassword(candidat.password);
    const updatedCandidat = { ...candidat, password: hashedPassword };

    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, password = ?, cv = ?, adress = ?, city = ?, postcode = ?, phone = ? WHERE id = ?`,
      [
        updatedCandidat.firstname,
        updatedCandidat.lastname,
        updatedCandidat.email,
        updatedCandidat.password,
        updatedCandidat.cv,
        updatedCandidat.adress,
        updatedCandidat.city,
        updatedCandidat.postcode,
        updatedCandidat.phone,
        updatedCandidat.id,
      ]
    );
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
    const [rows] = await this.findByEmail(email);

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
