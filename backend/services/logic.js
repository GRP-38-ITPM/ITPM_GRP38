const db=require('./db')

//get all garbages

const allGarbages=()=>{
    return db.Garbage.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    garbages:result
                }
            }else{
                return{
                    statusCode:404,
                    message:'Garbages not found'
                }
            }
        }
    )
}
//add garbages
const addGarbages=(id,gbid,gbname,quantity,description)=>{
    return db.Garbage.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:400,
                    message:'Garbage already exists'
                }
            }else{
                const newGarbage=new db.Garbage({id,gbid,gbname,quantity,description})
                newGarbage.save()
                return{
                    statusCode:200,
                    message:'Garbage sucessfully added'
                }
            }
        }
    )
}
//add garbages
const editGarbages=(id,gbid,gbname,quantity,description)=>{
    return db.Garbage.findOne({id}).then(
        (result)=>{
            if(result){
                result.id=id,
                result.gbid=gbid,
                result.gbname=gbname,
                result.quantity=quantity,
                result.description=description
                result.save()
                return{

                    statusCode:200,
                    message:'Garbage details edited sucessfullt'
                }
            }
        }
    )
}
//delete garbages
const deleteGarbages=(id)=>{
    return db.Garbage.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:'Deleted sucessfully'
                }
            }else{
                return{
                    statusCode:400,
                    message:'No data'
                }
            }
        }
    )
}

//get garbages
const getGarbage=(id)=>{
    return db.Garbage.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    garbage:result,
                    message:'Got data'
                }
            }else{
                return{
                    statusCode:400,
                    message:'No data'
                }
            }
        }
    )
}
module.exports={
    allGarbages,
    addGarbages,
    editGarbages,
    deleteGarbages,
    getGarbage
}