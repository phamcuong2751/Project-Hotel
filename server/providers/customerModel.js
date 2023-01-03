import sequelize from "../utils/database.js";
import initModels from "../models/init-models.js";


const models = initModels(sequelize);
// MaLoaiKH INTEGER NOT NULL,
// TenKH TEXT,
// SoCCCD TEXT,
// Email TEXT UNIQUE,
// GioiTinh TEXT NOT NULL,
// SoDienThoai TEXT ,

export default {
    async getAllCustomer(){
        const Customers = await models.khachhang.findAll();
        return Customers;
    },
    async addNewCustomer(customer){
        await models.khachhang.create({
            MaLoaiKH:customer.maloaikh,
            TenKH: customer.tenkh,
            SoCCCD: customer.socccd,
            Email:customer.email,
            GioiTinh: customer.gioitinh,
            SoDienThoai:customer.sodienthoai
        })
    },
    async findCustomerByIdCard(socccd){
        const customer =  await models.khachhang.findAll({
            where:{
                SoCCCD:socccd,
            }
        })
        return customer;
    },
    async findCustomerById(id){
        const customer =  await models.khachhang.findAll({
            where:{
                MaKH:id,
            }
        })
        return customer;
    }
}