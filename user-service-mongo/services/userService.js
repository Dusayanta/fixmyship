const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/users')
const Schema = mongoose.Schema
const schema = new Schema({firstName:String ,lastName:String,email :String,password:String,Age:Number});
const UserModel = mongoose.model('userdata',schema)

//fetch all users
 findAll = (callback)=>{
        UserModel.find({},{_id :false},(err,rows)=>{
            callback(err,rows)
        })
}
// add a new user document to the collection
const addUser = (user,callback)=>{
   // console.log(user)
        const userObj = new UserModel({firstName:user.firstName,lastName:user.lastName,email:user.email,password:user.password,Age:user.age})
        UserModel.create(userObj,(err,result)=>{
            callback(err,result)
        })   
}
//fetch all user and find duplicate userObj
findDuplicateUser = (user, callback) => {
    findAll = (users) => {
        let userA=[];
        userA=users.filter(u=>u.email!=user.email)
        console.log("userA",userA);              
        
        if(userA==''){
            console.log("new user")
            const userObj = new UserModel({ firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.password, Age: user.age })
            UserModel.create(userObj, (err, result) => {
                callback(err, result)
            })
        }
       else{
        console.log("user alredy exist")
       }
    }

}

module.exports ={
    all : findAll,
    findDuplicate:findDuplicateUser,
    add : addUser,
   
}