const argon2 = require("argon2");
const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "Candidats" });
  }

  async insert(candidat) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, password, cv, adress, city, postcode, phone) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        candidat.firstname,
        candidat.lastname,
        candidat.email,
        candidat.password,
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

  async update(candidat) {
    const hashedPassword = await argon2.hash(candidat.password);

    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ? , email = ?, password = ?, cv = ?, adress = ?, city = ?, postcode = ?, phone = ? WHERE id = ?`,
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
        candidat.id,
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
      return argon2.verify(rows[0].password, enteredPassword);
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
