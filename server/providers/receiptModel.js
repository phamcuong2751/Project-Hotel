import sequelize from "../utils/database.js";
import initModels from "../models/init-models.js";
import { Route } from "express";

const models = initModels(sequelize);

export default {
  async getAllReceipts() {
    const receipts = await models.hoadon.findAll();
    return receipts;
  },
  async findReceiptById(id) {
    try {
      const receiptList = await models.hoadon.findAll({
        where: {
          MaHD: id,
        },
      });
      return receiptList[0];
    } catch (error) {
      return null;
    }
  },
  async addNewReceipt(receipt) {
    await models.hoadon.create({
      MaKH: receipt.makh,
      NhanVienXuatHD: receipt.nhanvienxuathd,
      TongTien: receipt.tongtien,
      TrangThai: receipt.trangthai,
    });
  },
};
