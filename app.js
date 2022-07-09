const express = require('express');
const mysql = require('mysql');
const bp = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const m1 = require('./models/signupSchema');

//register view engine
app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended:true}));
app.use(bp.json())
app.listen(3000,(err)=>{
  if(err){
    console.log(err);
  }
  else {
    console.log("server has been started");
  }
});

mongoose.connect("mongodb://localhost:27017/user",{ useUnifiedTopology: true ,useNewUrlParser: true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));
app.use(express.static('public'));

app.get('/',(req,res)=>{

    // res.send('<p>Home Page</p>');
    res.render('index', {title: 'home'});
 });

 app.get('/about',(req,res)=>{

    // res.send('<p>About Page</p>');
    res.render('about', {title: 'About'});

 });

 app.get('/contact',(req,res)=>{

     //res.send('<p>Contact Page</p>');
     res.render('contact', {title: 'Contact'})

 });

 global.last = 0;
 global.logfile = [];
  app.get('/logfile',(req,res)=>{
 
     const dbSerever = mysql.createConnection({
         host:'localhost',
         user:'root',
         password:'Naveen99@',
         database: 'practice_project'
     })
     
     dbSerever.connect((err)=>{
         if(err){
             console.log(err);
         }
         else {
             console.log("Connected To Data Base");
         }
     });
     
     dbSerever.query('SELECT * FROM rawdata',(err,result)=>{
         if(err){throw err;}
         else{
             //console.log(result);
             for(var i =last;i<result.length;i++)
             {
                 if(result[i].temperature > 60 || result[i].CarbonMonoxide > 110 || result[i].smoke_in_ppm > 67)
                 {
                     let aValue = 
                     {
                         id: result[i].id,
                         location: result[i].location,
                         temperature: result[i].temperature,
                         CarbonMonoxide: result[i].CarbonMonoxide,
                         smoke_in_ppm: result[i].smoke_in_ppm,
                         _date: result[i]._date,
                     }
                     logfile.push(aValue);
                 }
             }
             //last = result.length;
             res.render('logfile',{title: 'Logfile', sensorData: logfile})
             console.log('done');
             last = result.length;
         }
     }); 
  });

app.post("/sign_up",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const confirm_password = req.body.confirm_password;
    const name = req.body.username;
    let errors = [];
    //check if match
    console.log(' Name: ' + name+ ' email :' + email+ ' pass:' + password + ' confirm_pass: ' + confirm_password);
    if(password != confirm_password){
        errors.push({msg : "Password Dont Match"});
    }
    m1.findOne({email:email}).then(user =>{
      if(user){
        errors.push({msg :"Email Already Exists"});
      }
    });

    if(errors.length > 0 ) {
    res.render('index', {
        errors : errors
    });
    errors.length = 0;
     } else {
      var hi = m1({
        _id:email,
        pass:password,
        username:name
       });
       m1.insertMany([hi],(err)=>{
          if(err){
            mongoose.connection.close();
            console.log(err);
          }
          else {
    //        alert('your registration is successfull');
            console.log("items are inserted succesfully");
              mongoose.connection.close();
              res.render('index');
          }
        });
      }

});

app.post("/login",(req,res)=>{
  const em = req.body.email;
  const password = req.body.password;
  let errors = [];
   m1.find({_id:em},(err,a)=>{
    if(err){
      console.log(err);
    }
    else{
      if(a.length==0){
        console.log("This Email is not registerd yet go and regiter first");
        errors.push({msg : "This Email is not registerd yet go and regiter first"})
        res.render('index',{errors:errors});
      }
      else {
        if(a[0].pass==password){
          console.log("login successfull");
          res.render('index2');
        }
        else {
          console.log("wrong password");
          errors.push({msg : "Wrong Password"});
          res.render('index',{errors:errors});
        }
      }
    }
  });



})
 //404Error
 app.use((req,res)=>{
     res.status(404).render('404', {title: '404'});
 });
