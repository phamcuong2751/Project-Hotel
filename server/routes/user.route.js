import express from 'express'
import sequelize from '../utils/database.js';

import initModels from '../models/init-models.js'
import userModel from '../providers/userModel.js';
import bcrypt from 'bcrypt'
const Router = express.Router();

const models = initModels(sequelize);
Router.get('/',async (req,res)=>{
    const userList = await userModel.getAllUser();

    // ignore password
    const userListJson = userList.map(user => {
        const { password, ...userJson } = user.toJSON();
        return userJson;
    });

    res.json(userListJson);
})


Router.post('/login', async (req,res)=>{
    let {username, password} = req.body;
    console.log(req.body)
    const user = await userModel.findUserByUsername(username);
    try {
        if(user.length==0){
            return res.status(400).json({message:"Username or password is not correct"});
        }else {
           
            const isValidPassword = await bcrypt.compare(password,user.password);
            if(!isValidPassword){
                return res.status(400).json({message:"Username or password is not correct"});
            }
            delete user.password;
            return res.json(user);
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
    
})

Router.post('/register',async (req,res)=>{
    let { name, username,password,role} = req.body;
    
    const user = await userModel.findUserByUsername(username);
    console.log(user);
    if(!user){
        password = await bcrypt.hash(password,10);
        const user = {
            name,
            username,
            password,
            role,
        }
        await userModel.addNewUser(user);
        return res.status(200).json({status:'Success'});
    }
    return res.status(400).json({message:'Username has already exist'});
})



export default Router;
