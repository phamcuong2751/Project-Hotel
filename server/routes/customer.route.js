import express from "express";
import customerModel from "../providers/customerModel.js";

const Router = express.Router();

Router.get('/', async (req,res)=>{
    const customers = await customerModel.getAllCustomer();
    return res.status(200).json(customers);
})

Router.post('/addNew',async(req,res)=>{
    const {maloaikh,tenkh,socccd,email,gioitinh,sodienthoai} = req.body;
    try {
        const cus  =  await customerModel.findCustomerByIdCard(socccd);
        let isExistCustomer = cus.length!=0?true:false;
        if(isExistCustomer){
            return res.status(400).json({message:"Customer has already existed"})
        }
        const newCustomer = {
            maloaikh,
            tenkh,
            socccd,
            email,
            gioitinh,
            sodienthoai
        } 
        await customerModel.addNewCustomer(newCustomer);
        res.status(200).json({status:'Success'})
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})

export default Router;