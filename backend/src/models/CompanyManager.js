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

  async insert(company) {
    if (!company.name || typeof company.name !== "string") {
      throw new Error("Invalid or missing 'name' in the company data.");
    }

    const existingCompany = await this.database.query(
      `SELECT name FROM ${this.table} WHERE name = ?`,
      [company.name]
    );

    if (existingCompany.length > 0) {
      throw new Error("Company with this 'name' already exists.");
    }

    if (!company.email || typeof company.email !== "string") {
      throw new Error("Invalid or missing 'email' in the company data.");
    }
    if (!company.hashedpassword || typeof company.hashedpassword !== "string") {
      throw new Error(
        "Invalid or missing 'hashedpassword' in the company data."
      );
    }
    if (!company.description || typeof company.description !== "string") {
      throw new Error("Invalid or missing 'description' in the company data.");
    }
    if (!company.address || typeof company.address !== "string") {
      throw new Error("Invalid or missing 'address' in the company data.");
    }
    if (!company.city || typeof company.city !== "string") {
      throw new Error("Invalid or missing 'city' in the company data.");
    }
    if (
      !company.postcode ||
      !Number.isInteger(parseInt(company.postcode, 10))
    ) {
      throw new Error("Invalid or missing 'postcode' in the company data.");
    }

    return this.database.query(
      `INSERT INTO ${this.table} (id, name, email, hashedpassword, description, address, city, postcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
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
