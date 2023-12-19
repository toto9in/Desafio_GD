import bcrypt from "bcrypt";

//based on https://www.npmjs.com/package/bcrypt
const encryptPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

const passwordMatches = async (password, encryptedPassword) => {
  return await bcrypt.compare(password, encryptedPassword);
};

export default { encryptPassword, passwordMatches };
