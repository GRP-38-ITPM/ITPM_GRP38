const mongoose = require("mongoose");
const schema = mongoose.Schema;

//create schema
const Information_schema = new schema({
  first_Name: { type: String, required: true,unique:true,min:3,max:20},
  last_Name: { type: String, required: true,min:3,max:20},
  address: { type: String, required: true},
  contact_no: { type: Number, required: true},
  qty: { type: Number, required: true},
  description:{type:String, required: true,min:3,max:50}
});

const information=mongoose.model('information',Information_schema);

module.exports=information;