import express from "express";
import receiptModel from "../providers/receiptModel.js";
import rentingBillModel from "../providers/rentingBillModel.js";
const Router = express.Router();
Router.get('/',async (req,res)=>{
    const receipts = await rentingBillModel.getAllRentingBill();
    return res.status(200).json(receipts);
})

Router.get('/:id',async (req,res)=>{
    const id = req.params.id;
    try {
        const rentingBill = await rentingBillModel.findRentingBillById(id);
        return res.status(200).json(rentingBill);
    } catch (error) {
        res.status(500).json({error:error.messsage})
    }
})
Router.post('/addNew', async(req,res)=>{
    // maphieu | makh | nhanvienlapphieu | maphong | ngaynhanphong | ngaylapphieu
    const {makh,nhanvienlapphieu,maphong} = req.body;
    try {
        const rentingBill = {
            makh,nhanvienlapphieu,maphong
        }
        await rentingBillModel.addNewRentingBill(rentingBill);
        return res.status(200).json({status:"Success"})
        
    } catch (error) {
        res.status(500).json({error:error.messsage})
    }
})

export default Router;