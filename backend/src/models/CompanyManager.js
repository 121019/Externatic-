const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "Enterprise" });
  }

  findAll() {
    return this.database.query(
      `SELECT id, name, email, description, address, city, postcode FROM ${this.table}`
    );
  }

  find(id) {
    return this.database.query(
      `SELECT id, name, email, description, address, city, postcode FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  findByName(name) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE name = ?`, [
      name,
    ]);
  }

  async insert(company) {
    return this.database.query(
      `INSERT INTO ${this.table} ( name, email, hashedpassword, description, address, city, postcode) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        company.name,
        company.email,
        company.hashedpassword,
        company.description,
        company.address,
        company.city,
        company.postcode,
      ]
    );
  }

  update(company, id) {
    return this.database.query(
      `UPDATE ${this.table} SET  name = ?, email = ?, hashedPassword = ?, description = ?, address = ?, city = ?, postcode = ? WHERE id = ?`,
      [
        company.name,
        company.email,
        company.password,
        company.description,
        company.address,
        company.city,
        company.postcode,
        id,
      ]
    );
  }

  findByCompanynameWithHashedPassword(name) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE name = ?`, [
      name,
    ]);
  }
}

module.exports = CompanyManager;
