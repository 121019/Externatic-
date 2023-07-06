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

    console.error("New Candidat:", newCandidat); // Log the new candidat object
    // Yes  But this function is not calling in /candidate [POST] request
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

  findByUsernameWithHashedPassword(email) {
    console.error("Email:", email); // Log the email parameter

    return this.database.query(
      `SELECT id, email, password FROM ${this.table} WHERE email = ?`,
      [email]
    );
  }

  find(id) {
    console.error("ID:", id); // Log the id parameter

    return this.database.query(
      `SELECT firstname and lastname FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  findByName(name) {
    console.error("Name:", name); // Log the name parameter

    return this.database.query(`SELECT * FROM ${this.table} WHERE name = ?`, [
      name,
    ]);
  }

  async update(candidat) {
    const hashedPassword = await hashPassword(candidat.password);
    const updatedCandidat = { ...candidat, password: hashedPassword };

    console.error("Updated Candidat:", updatedCandidat); // Log the updated candidat object

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

  async verifyUserPassword(email, password) {
    const [rows] = await this.findByUsernameWithHashedPassword(email);

    console.error("Rows:", rows); // Log the retrieved rows

    if (!rows[0]) {
      console.error("Candidat not found");
      return false;
    }

    const candidat = rows[0];

    console.error("Candidat:", candidat); // Log the candidat object

    const isPasswordValid = await verifyPassword(candidat.password, password);

    return isPasswordValid;
  }
}

module.exports = CandidatManager;
