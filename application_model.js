var mongoose=require("mongoose")

//connection of url 
conn_url="mongodb://root:root@cluster0-shard-00-00.dqte6.mongodb.net:27017,cluster0-shard-00-01.dqte6.mongodb.net:27017,cluster0-shard-00-02.dqte6.mongodb.net:27017/clubData?ssl=true&replicaSet=atlas-j2zamj-shard-0&authSource=admin&retryWrites=true&w=majority"

//connection to mongodb
mongoose.connect(conn_url,{useNewUrlParser:true,useUnifinedTopology:true})

//making schema

const clubSchema=new mongoose.Schema({
    "name":String,
    "email":String,
    "mobile":String,
    "city":String,
    "expiry":String
})

//connected with schema
const clubModel=new mongoose.model("clubmembers",clubSchema)

exports.club=clubModel