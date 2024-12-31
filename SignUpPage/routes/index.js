var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

const userName = 'admin';
const password = 'admin@123';

router.use(express.urlencoded({extended:true}));
router.use(express.json());


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index');
 
}); 

router.post('/signInAction', (req , res , next) =>{
 console.log(req.body);
 
   if(req.body.Username === userName && 
  req.body.Password === password){
    res.render('home');
  }else{
    res.render('index',{msg:'Invalid Credentials'});
  }
})

router.post('/signUp', (req , res , next) =>{
  
  res.send("got it");
})
module.exports = router;  
 