let mongoose = require("mongoose")

let dataSchema = mongoose.Schema({
    name:
    {
        type:String,
        // required:true
    },
    number:
    {
        type:Number,
        // default:true
    },
    email:
    {
        type:String,
        // default:true
    },
    password:
    {
        type:String
        // default:true
    },
    created_date:
    {
        type:Date,
        default:Date.now
    }
    
});

module.exports = mongoose.model("Datas",dataSchema);