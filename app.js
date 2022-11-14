const express = require("express"),
      app = express(),
      Item = require("./items/model")
      mongoose = require("mongoose")
      bodyParser = require("body-parser"),
      itemRoutes = require("./items/routes"),
      methodOverride = require("method-override")

// connecting dtabase
main().catch(err=>{console.log(err)});
async function main(){
  await mongoose.connect("mongodb://localhost:27017/test")
}
// extras
app.set("view engine", "ejs");
app.use(methodOverride("_method"))
app.use(bodyParser.urlencoded({extended:true}));

// root routes
app.get("/", (req,res,next)=>{
  res.json({
    message: "Arise MERN Developers",
  })
})
app.get("/form", (req,res)=>{
  res.render("index")
})
app.use("/items", itemRoutes)
//create date into data base
// Item.create({
//   name:"emmanuel",
//   age:50,
// }, (err, created)=>{
//   if(err){res.send(err)
//   } else{
//     console.log(created)
//   }
// })
// Item.deleteMany({}, (err)=>{
//   if(err){console.log(err)}
// })
// connecting to sercer
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log("server just started");
})