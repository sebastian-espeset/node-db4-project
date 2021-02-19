const express = require("express");
const server = express();
const RecipesRouter= require('../api/recipes/recipes-router')

server.use(express.json());
server.use('/api/recipes',RecipesRouter);

server.get('/',(req,res)=>{
    res.status(200).json(`hello bubblegum`)
})

module.exports=server;