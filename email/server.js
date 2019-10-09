/**
 * nodemailer is not used for production level apps (instead use sendgrid api)
 * make sure to remove your credentials(emailid and password) while pushing this code to github
 * 
 * in order to use nodemailer you have disabled security of used email id
 */

 /**
  * npm install nodemailer
  */
const nodemailer = require('nodemailer');

const configuration = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Enter your email here',
      pass: 'Enter your email id password'
    }
});

var mailOptions = {
    from: 'Enter your email here',
    to: 'To whom you want to send email',
    subject: 'write your subject here',
    text: 'Hello how are you !'
};

configuration.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent');
    }
});