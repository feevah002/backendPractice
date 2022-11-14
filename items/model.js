const mongoose = require("mongoose")


const itemSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true,"name must be specified"]
  },
  age:{
    type:String,
    required:[true,"age must be specified"]
  }
})

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;