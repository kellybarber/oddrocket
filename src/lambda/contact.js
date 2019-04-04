const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
   const { name, email, message } = JSON.parse(event.body);

  callback(null, {
    statusCode : 200,
    body       : JSON.stringify({ hello : 'there' })
  })
};