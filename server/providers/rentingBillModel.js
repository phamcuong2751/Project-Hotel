import sequelize from "../utils/database.js";

import initModels from "../models/init-models.js";

const models = initModels(sequelize);

export default{
    async getAllRentingBill(){
        const retingBills = await models.phieuthuephong.findAll();
        return retingBills;
    },
    async addNewRentingBill(rentingBill){
        await models.phieuthuephong.create({
            makh:rentingBill.makh,
            nhanvienlapphieu:rentingBill.nhanvienlapphieu,
            maphong:rentingBill.maphong,
            
        })
    },
    async findRentingBillById(id){
        try {
            const rentingBill = await models.phieuthuephong.findAll({
                where:{
                    maphieu:id
                }
            })
            return rentingBill;
        } catch (error) {
            console.log(error.message);
            return null;
        }   
        
    }
}