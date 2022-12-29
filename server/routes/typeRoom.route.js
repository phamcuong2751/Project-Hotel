import express from "express";
import typeRoomModel from "../providers/typeRoomModel.js";
const Router = express.Router();

Router.get('/',async (req,res)=>{
    try {
        const typeRooms = await typeRoomModel.getAllTypeRooms();
        return res.status(200).json(typeRooms);
    } catch (error) {
        res.status(500).json(error.message);
    }
    

})
Router.post('/addNew',async (req,res)=>{
    const {tenloaiphong,mota} = req.body;
    try {
        let typeRoom ={
            tenloaiphong,
            mota
        }
        await typeRoomModel.addTypeRoom(typeRoom);
        return res.status(200).json({status:'Success'});
    } catch (error) {
        
    }
})
Router.post('/search/:name',async (req,res)=>{
    const name = req.params.name;
    try {
        const listTypeRooms = await typeRoomModel.findRoomByName(name);
        res.status(200).json(listTypeRooms);
    } catch (error) {
        res.status(500).json(error.message);
    }
})
export default Router;

