const express=require('express');
require("../src/db/conn");
const res = require('express/lib/response');
const MensRanking=require("../src/models/mens");
const router = require("../src/router/main");

const app=express();
const port=process.env.PORT || 3000;

app.use(express.json());


app.use(router);

app.listen(port,()=>{
    console.log(`listening to at port ${port}`);

})