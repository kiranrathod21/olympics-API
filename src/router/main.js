const express=require('express');
const router=new express.Router();

const MensRanking=require("../models/mens");


// we will handell post req

router.post("/mens",async(req,res)=>{
    try {
     const addingMensRecord=  await new MensRanking(req.body);
     console.log(req.body);
    const inserMens =await addingMensRecord.save();
    res.status(201).send(inserMens);
    } catch (e) {
        res.status(400).send(e);
    }

})


// get requist

router.get("/mens",async(req,res)=>{
    try {
  const getMens=await MensRanking.find({}).sort({"ranking":1});
    res.send(getMens);
    } catch (e) {
        res.status(400).send(e);
    }

})

//we will handel get req of indivisual
router.get("/mens/:id",async(req,res)=>{
    try {
        const _id=req.params.id
  const getMen=await MensRanking.findById({_id});
    res.send(getMen);
    } catch (e) {
        res.status(400).send(e);
    }

})

//we will handel update req of indivisual
router.patch("/mens/:id",async(req,res)=>{
    try {
        const _id=req.params.id
  const getMen=await MensRanking.findByIdAndUpdate(_id,req.body,{
      new:true
  });
    res.send(getMen);
    } catch (e) {
        res.status(500).send(e);
    }

})



//we will handel delete req of indivisual
router.delete("/mens/:id",async(req,res)=>{
    try {
        const _id=req.params.id
  const getMen=await MensRanking.findByIdAndDelete(_id);
    res.send(getMen);
    } catch (e) {
        res.status(500).send(e);
    }

})

module.exports=router;

