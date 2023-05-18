const express=require('express');
const mongoose=require('mongoose');
const informationRoute=require('./routes/informerRoute');
const userRoute=require('./routes/userRoute')
const cors=require('cors');
const app=express();
require('dotenv').config();


app.use(express.json());

const uri='mongodb+srv://senthvyra:www.senth28.lk@itpmapp.uoxdgut.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

mongoose.connect(uri)
   .then(result => {
      console.log("Succesfully connected!!");
   }).catch(error => console.log(error));


   //Connect REST API
app.use('/api/informer',informationRoute);
app.use('/api/profile',userRoute);


app.listen(4000,()=>{
  console.log('server sucessfully running on the port 4000!!')
});
