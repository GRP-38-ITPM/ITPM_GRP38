const router= require('express').Router();
const Users = require('../model/user.modal');

//declare function
//error handling
function handleError(res, error) {
  res.status(400);
  res.send("something went wrong!!\n" + error);
}

//check emptylist
function isEmptyList(obj) {
  return !obj || obj.length == 0 || Object.keys(obj).length == 0;
}

//url:/user/   get:Read all
router.route('/users').get((req,res)=>{
Users.find()
.then(users=>res.json(users))
.catch(err=>res.status(400).json("err"+err))
})




module.exports = router;
