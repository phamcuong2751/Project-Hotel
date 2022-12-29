import Sequelize from '../utils/database.js'

import initModels from '../models/init-models.js'
import { Op } from 'sequelize';
const models = initModels(Sequelize);


export default {
    async getAllRooms(){
        const rooms = await models.phong.findAll();
        return rooms;
    },
    async getRoomByName(name){
        const rooms = await models.phong.findAll({
            where:{
                ten:{
                    [Op.iLike]:'%'+name+'%',
                }
        }})
        return rooms;
    },
    async getRoomById(id){
        try {
            const room = await models.phong.findAll({where:{
                maphong:id
            }})
            return room[0];
        } catch (error) {
            console.log(error.message);
            return null;
        }
        
        
    }
}