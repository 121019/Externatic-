// middleware/validateCompanyData.js

const validateCompanyData = (req, res, next) => {
  const company = req.body;

  if (!company.name || typeof company.name !== "string") {
    throw new Error("Invalid or missing 'name' in the company data.");
  }

  if (!company.email || typeof company.email !== "string") {
    throw new Error("Invalid or missing 'email' in the company data.");
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
  if (!company.postcode || !Number.isInteger(parseInt(company.postcode, 10))) {
    throw new Error("Invalid or missing 'postcode' in the company data.");
  }

  // If all validations pass, proceed to the next middleware/route handler
  next();
};

module.exports = { validateCompanyData };
