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
    await models.nhanvien.create({
      username: user.username,
      password: user.password,
      LoaiNV: user.role,
      Fullname: user.name,
    });
  },
};
