import express from "express";
import receiptModel from "../providers/receiptModel.js";
import userModel from "../providers/userModel.js";
import customerModel from "../providers/customerModel.js"
const Router = express.Router();


Router.get('/',async(req,res)=>{
    const receipts = await receiptModel.getAllReceipts();
    res.status(200).json(receipts);
    
})

Router.get('/:id',async (req,res)=>{
     const id = req.params.id;
     const receipt = await receiptModel.findReceiptById(id);
     res.status(200).json(receipt);
})
Router.post('/addNew',async (req,res)=>{
    const {socccd,nhanvienxuathd,tongtien,trangthai} = req.body;
    let customer = await customerModel.findCustomerByIdCard(socccd);
    if(customer.length==0){
    
        let newCustomer = {
            maloaikh:1,
            tenkh:"",
            socccd:socccd,
            email:"user"+socccd,
            gioitinh:"Nam",
            sodienthoai:""
        }
        await customerModel.addNewCustomer(newCustomer);

        customer = await customerModel.findCustomerByIdCard(socccd);
        

    }
    else {
        customer = await customerModel.findCustomerByIdCard(socccd);
        
    }
    try {
        const receipt ={
           makh: customer[0].makh,
           nhanvienxuathd,
           tongtien,
           trangthai
        }
        await receiptModel.addNewReceipt(receipt);
        return res.status(200).json({status:"Success"});

    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
export default Router;