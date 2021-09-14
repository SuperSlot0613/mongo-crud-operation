var club_model = require("./application_model");
var ObjectId = require('mongodb').ObjectId; 

var express = require("express");
var app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

const port = 9999;

const club = club_model.club;


app.get("/clubuser", async (req, res) => {
  //reading data from database
  // var o_id = new ObjectId(req.body._id);
  let data = await club.find({"_id":ObjectId(req.body._id)});
  console.log(data);
  res.send(data);
});

app.get("/club", async (req, res) => {
  //reading data from database
  let data = await club.find();
  // console.log(data);
  res.send(data);
});

app.post("/club", async (req, res) => {
  let data = new club(req.body); //this is use for add data in database
  // console.log(req.body)
  let result = await data.save();
  res.send(result);
});

app.put("/club", async (req, res) => {
  // console.log(req.body);
  // console.log(req.body._id)
  // console.log(req.body.name)
  // console.log(req.body.address)
  // console.log(req.body.salary)

  //Update data in database
  let deta=await club.updateOne({"_id":req.body._id},{
    "$set":{
      "name":req.body.name,
      "email":req.body.email,
      "mobile":req.body.mobile,
      "city":req.body.city,
      "expiry":req.body.expiry
    }
  })
  res.send(deta);
});


app.delete("/club",async (req,res)=>{
  console.log(req.body._id)
  //delete data from database
  let data=await club.deleteOne({_id:req.body._id})
  res.send(data)
})


app.listen(process.env.PORT || port, () => {
  console.log(`Listen on port ${port}`);
});
