import sequelize from "../utils/database.js";

import initModels from "../models/init-models.js";

const models = initModels(sequelize);

export default {
  async getAllUser() {
    const listUsers = await models.nhanvien.findAll();
    return listUsers;
  },
  async findUserByUsername(username) {
    const user = await models.nhanvien.findAll({
      where: {
        username: username,
      },
    });
    return user[0];
  },
  async addNewUser(user) {
    console.log("Add User on here ");
    await models.nhanvien.create({
      name: user.name,
      username: user.username,
      password: user.password,
      role: user.role,
    });
  },
};
