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

  insert(company) {
    if (!company.id || typeof company.id !== "number") {
      throw new Error("Invalid or missing 'id' in the company data.");
    }

    if (!company.name || typeof company.name !== "string") {
      throw new Error("Invalid or missing 'name' in the company data.");
    }
    if (!company.email || typeof company.email !== "string") {
      throw new Error("invalide or missing 'email' in the company data");
    }
    return this.database.query(
      `INSERT INTO ${this.table} (id, name, email,hashedpassword, description, address, city, postcode) VALUES (?,?,?,?,?,?,?,?)`,
      [
        company.id,
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
