const mongoose = require("mongoose");
const schema = mongoose.Schema;

//create schema
const userSchema = new schema({
  profile_name: { type: String, required: true,unique:true,min:3,max:20},
  email_id:{ type:String, required: true,unique:true},
  contact_no: { type: Number, required: true,unique:true},
  profile_description: { type: String,min:5,max:20},
  password:{ type: String,min:5,max:20},

});

const Users=mongoose.model('Users',userSchema);
module.export=Users;
