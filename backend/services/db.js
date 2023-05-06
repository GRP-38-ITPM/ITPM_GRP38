const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://senthvyra:www.senth28.lk@itpmapp.uoxdgut.mongodb.net/?retryWrites=true&w=majority')

//create model

const Garbage=mongoose.model('Garbage',{
    //schema creation
    id:String,
    gbid:String,
    gbname:String,
    quantity:String,
    description:String
})

module.exports={
    Garbage
}