const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = async (password) => {
  try {
    return await argon2.hash(password, hashingOptions);
  } catch (error) {
    console.error("Error during password hashing:", error);
    throw error;
  }
};

const verifyPassword = async (hashedPassword, password) => {
  try {
    return await argon2.verify(hashedPassword, password);
  } catch (error) {
    console.error("Error during password verification:", error);
    throw error;
  }
};

const signToken = (payload, secretKey, expiresIn) => {
  try {
    return jwt.sign(payload, secretKey, { expiresIn });
  } catch (error) {
    console.error("Error during token signing:", error);
    throw error;
  }
};

const verifyToken = (token, secretKey) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.error("Error during token verification:", error);
    throw error;
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  signToken,
  verifyToken,
};
