var express = require('express');
var router = express.Router();
var auth = require('../modules/auth');
var hp = require('../modules/helpers');
var db = require('../modules/pairHelpers');
var config = require('../modules/config');


  // Twilio Credentials
var accountSid = 'ACcdb61422dc5b33f2a20551b44f83d882';
var authToken = 'c8bea36594bcc2e182ef93e8955b0048';

router.post('/', message);

function message(req, res) {
  //require the Twilio module and create a REST client
  console.log('inside message', req);
  var client = require('twilio')(accountSid, authToken);
  console.log('inside message')
  client.messages.create({
    to: "7142871507",
    from: "+17148315802",
    body: "hi",
  }, function(err, message) {
    console.log(message.sid);
  });
}

module.exports = router
