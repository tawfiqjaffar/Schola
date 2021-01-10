const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const checkHash = async (password, hash) => {
  const hasMatched = await bcrypt.compare(password, hash);
  return hasMatched;
};

module.exports = {
  hashPassword,
  checkHash,
};
