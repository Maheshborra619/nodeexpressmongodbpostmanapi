const express = require('express');
const router = express.Router();
const empSchema = require('../models/employee')

router.get('/',async (req,res)=>{
    try{
        const emplo = await empSchema.find();
        res.send(emplo);
    }catch(err){
     res.send(err);
    }
})

router.post('/',async (req,res)=>{
    const postBody = new empSchema({
        name:req.body.name,
        technology:req.body.technology
    })
try{
    const saveBody = await postBody.save();

    res.json(saveBody);

}catch(err){
    res.send(err);
}
})

router.patch("/:id",async (req,res)=>{
    try{
        const findId = await empSchema.findById(req.params.id);
        findId.subscribe = req.body.subscribe;
        const updateId = await findId.save();
        res.json(updateId);
    }
    catch(err){
     res.send(err);
    }
})

router.get('/:id',async(req,res)=>{
try{
    const getdatabyid = await empSchema.findById(req.params.id);
    res.json(getdatabyid);
}catch(err){
    res.send(err)
}
})



module.exports = router;