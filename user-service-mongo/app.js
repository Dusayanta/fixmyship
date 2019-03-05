const express = require('express')
const parser = require('body-parser')
const app = express()
const userService = require('./services/userService')
const cors=require('cors')
var jwt=require("jsonwebtoken")
app.use(cors())
app.use(parser.json())

//fetch all users from mongo
app.get('/users',(rq,rs)=>{
    rs.setHeader('content-type','application/json')
    // fetch all users from mongo via mongoose
    userService.all((err,rows)=>{
       
        if(err) rs.end('Error Occured')
        else{
            rs.json(rows)
        }
    })    
})
app.listen(4210,()=>{
    console.log('Server running at 4210')
})

//find duplicate user
app.post('/dup',(rq,rs)=>{
    rs.setHeader('content-type','application/json')
    const user = rq.body
    userService.findDuplicate(user,(err,result)=>{
        if(err) {
            rs.json({message:'Error Occured ',err})
        }
        else{
            rs.json({message:'User Added Successfully'})
        }
    })      
})
// add a new user
app.post('/user/add',(req,res)=>{
    res.setHeader('content-type','application/json')
    const user = req.body
	//console.log(user)
    userService.add(user,(err,result)=>{
        if(err) {
            res.json({message:'Error Occured ',err})
        }
        else{
            res.json({message:'User Added Successfully'})
        }
    })
})
//jwt

app.post('/api/login',(req,res)=>{
    //mock user
    const user={
        email:'shital@gmail.com',
        password:"1234"
    }
    jwt.sign({user},'secretkey', {expiresIn: '300s'},(err,token)=>{
        res.json({
            token
        });
    });
  });
  
  app.post('/api/posts', verifyToken, (req, res) => {  
       jwt.verify(req.token, 'secretkey', (err, authData) => {
          if(err) {
            res.sendStatus(403);
      } else {
          res.json({
            message: 'Post created...',
           authData
    
          });
    
        }
    
      });
    
    });
  
  // Verify Token
  
  function verifyToken(req, res, next) {
  
      // Get auth header value
    
      const bearerHeader = req.headers['authorization'];
    
      // Check if bearer is undefined
    
      if(typeof bearerHeader !== 'undefined') {
      // Split at the space
     const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
     // Set the token
      req.token = bearerToken;
     // Next middleware
      next();
    
      } else {
       // Forbidden
      res.sendStatus(403);
    
      }
    }