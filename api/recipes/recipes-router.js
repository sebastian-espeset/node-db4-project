const express = require("express");
const Recipes = require('./recipes-modules');
const router = express.Router();

router.get('/', async (req,res)=>{
    try{
        const data = await Recipes.get();
        res.json(data)
    }catch(error){
        res.json(error.message)
    }
})
module.exports=router;