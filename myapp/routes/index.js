var express = require('express');
const nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


var transporter = nodemailer.createTransport({
  host:"smtp.gmail.com",
  port:587,
  secure:false,
  requireTLS:true,
  auth:{
      user:"sender email",
      pass:"password"
  }
});

var mailOptions={
  from:"sender email",
  to:"email",
  subject:"testing",
  text:"hello"
}

transporter.sendMail(mailOptions,function(error,info){
  if(error)
  {
      console.log(error);

  }
  else{
      console.log("email has been sent ",info.response);
  }

});


module.exports = router;
