const { parse, isValid } = require("date-fns");
const { frFR } = require("date-fns/locale");

const validateJobOfferData = (req, res, next) => {
  const {
    JobTitle,
    Description,
    Location,
    UploadDate,
    ContractType,
    EnterpriseId,
    category,
  } = req.body;

  if (!JobTitle || typeof JobTitle !== "string") {
    throw new Error("Invalid or missing 'JobTitle' in the form data.");
  }

  if (!Description || typeof Description !== "string") {
    throw new Error("Invalid or missing 'Description' in the form data.");
  }

  if (!Location || typeof Location !== "string") {
    throw new Error("Invalid or missing 'Location' in the form data.");
  }

  const parsedDate = parse(UploadDate, "yyyy-MM-dd", new Date(), {
    locale: frFR,
  });

  const isValidDate = isValid(parsedDate);

  if (Number.isNaN(parsedDate) || !isValidDate) {
    throw new Error("Invalid or missing 'UploadDate' in the form data.");
  }

  if (!ContractType || typeof ContractType !== "string") {
    throw new Error("Invalid or missing 'ContractType' in the form data.");
  }

  if (!EnterpriseId || typeof EnterpriseId !== "number") {
    throw new Error("Invalid or missing 'EnterpriseId' in the form data.");
  }

  if (!category || typeof category !== "string") {
    throw new Error("Invalid or missing 'category' in the form data.");
  }

  next();
};

module.exports = { validateJobOfferData };
