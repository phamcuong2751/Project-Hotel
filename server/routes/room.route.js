import express from 'express'
import roomModel from '../providers/roomModel.js';
const Router = express.Router();

Router.get('/', async (req,res)=>{
    const roomList  = await roomModel.getAllRooms();
    res.json(roomList);
})
Router.get('/search/:name',async(req,res)=>{
    const name = req.params.name;
    const listRooms = await roomModel.getRoomByName(name);
    res.status(200).json(listRooms);
})
Router.get('/:id',async (req,res)=>{
    const id = req.params.id;
    const room = await roomModel.getRoomById(id);
    res.status(200).json(room);
})
export default Router;