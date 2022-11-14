const Item = require("./model");

exports.items = async ()=>{
  const items = await Item.find();
  return items
}
exports.itemsById = async (id)=>{
   const item = await Item.findById(id);
   return item

}
exports.createItem = async (payload)=>{
  const newItem = await Item.create(payload);
  return newItem;
}
exports.editItem = async (id, newData)=>{
  const  editItem = Item.findByIdAndUpdate(id, newData)
  return editItem
}
exports.delete