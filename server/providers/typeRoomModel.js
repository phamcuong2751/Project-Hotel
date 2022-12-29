import sequelize from "../utils/database.js";
import initModels from "../models/init-models.js";
import { Op } from "sequelize";
const models = initModels(sequelize);

export default {
    async getAllTypeRooms(){
        const listTypeRooms = await models.loaiphong.findAll();
        return listTypeRooms;
    },
    async findRoomByName(name){
        const listTypeRooms = await models.loaiphong.findAll({
            where:{
                tenloaiphong:{
                    [Op.iLike]:'%'+name+'%',
                }
            }
        })
        return listTypeRooms;
    },
    async addTypeRoom (typeRoom){
        await models.loaiphong.create({
            tenloaiphong:typeRoom.tenloaiphong,
            mota:typeRoom.mota
        })
    
    }
}