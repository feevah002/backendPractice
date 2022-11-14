const itemRepo = require("./repository.js");

exports.items = async (req, res)=>{
  try{
    let items = await itemRepo.items()
    res.status(200).json({
      status:true,
      data:items
    })
  } catch(err){
    res.status(500).json({
      status:false,
      error:err
    })
  }
}
exports.findById = async (req,res)=>{
  try{
    let id = req.params.id;
    let foundItem = await itemRepo.itemsById(id);
    res.status(200).json({
      status:true,
      data:foundItem
    })
  } catch(err){
    res.status(500).json({
      status:false,
      error:err
    })
  }
}
exports.createNewItem = async (req, res)=>{
  try{
    let payload ={
      name: req.body.name,
      age:req.body.age
    }
    let newItem = await itemRepo.createItem(payload)
    res.status(200).json({
      status:true,
      data:newItem
    })
  } catch (err){
    res.status(500).json({
      status:false,
      error:err
    })
  } 
}
exports.editItem = async (req,res)=>{
  try{
    id = req,params.id;
    newData = {
      name : req.body.name,
      age : req.body.age,
    }
    let edited = await itemRepo.editItem(id, newData)
    res.status(200).json({
      status:true,
      data:"edited data:", edited
    })

  } catch(err){
    res.status(500).json({
      status:true,
      error:err,
    })
  }
}

exports.removeItem = async (req,res)=>{
  try{
    delItem = await itemRepo.remItem(id);
    res.status(200).json({
      status:true,
      data: delItem,
    })
  } catch(err){
    res.status(500).json({
      status:false,
      error:err
    })
  }
}