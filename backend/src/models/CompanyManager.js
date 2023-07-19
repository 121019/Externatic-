const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "Enterprise" });
  }

  findAll() {
    return this.database.query(
      `SELECT id, Name, Email, Description, Adress, City, Postcode FROM ${this.table}`
    );
  }

  find(id) {
    return this.database.query(
      `SELECT id, Name, Email, Description, Adress, City, Postcode FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  insert(company) {
    return this.database.query(
      `INSERT INTO ${this.table} (id, Name, Email,Password, Description, Adress, City, Postcode) VALUES (?,?,?,?,?,?,?,?)`,
      [
        company.id,
        company.Name,
        company.Email,
        company.Password,
        company.Description,
        company.Adress,
        company.City,
        company.Postcode,
      ]
    );
  }

  update(company, id) {
    return this.database.query(
      `UPDATE ${this.table} SET  Name = ?, Email = ?,Password = ?, Description = ?, Adress = ?, City = ?, Postcode = ? WHERE id = ?`,
      [
        company.Name,
        company.Email,
        company.Password,
        company.Description,
        company.Adress,
        company.City,
        company.Postcode,
        id,
      ]
    );
  }

  findByCompanynameWithHashedPassword(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }
}

module.exports = CompanyManager;
