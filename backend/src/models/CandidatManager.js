const { hashPassword, verifyPassword } = require("./Hash");
const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "Candidats" });
  }

  async insert(candidat) {
    const hashedPassword = await hashPassword(candidat.password);
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

  findByName(name) {
    return this.database.query(`SELECT * from ${this.table} where email = ?`, [
      name,
    ]);
  }

  async update(candidat) {
    const hashedPassword = await hashPassword(candidat.password);
    const updatedCandidat = { ...candidat, password: hashedPassword };

    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ? , email = ?, password = ?, cv = ?, adress = ?, city = ?, postcode = ?, phone = ? WHERE id = ?`,
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

  async checkPassword(candidatEmail, enteredPassword) {
    const [rows] = await this.findByName(candidatEmail);
    if (rows.length === 0) {
      // No user found
      throw new Error("No user found");
    } else {
      // User found, now we'll compare the passwords
      return verifyPassword(rows[0].password, enteredPassword);
    }
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = CandidatManager;
