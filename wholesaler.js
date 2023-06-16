import mongoose from "mongoose";

const WholesalerSchema = mongoose.Schema({
    "type" : {type:String},
    "uid" : {type : String},
    "Name" : {type : String},
    "event": {type : String},
    "tagline" : {type : String},
    "schedule" : {type : String},
    "catagory" : {type : String},
    "sub_catagory" : {type : String},
    "files" : {type : String},
    "desciption" : {type : String},
    "rigor_rank" : {type : String},
    "attendence" : {type : Array},
    "userState": { type: Boolean },
})

export default mongoose.model("Wholesaler",WholesalerSchema);