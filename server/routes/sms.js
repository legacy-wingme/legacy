var express = require('express');
var router = express.Router();
var auth = require('../modules/auth');
var hp = require('../modules/helpers');
var db = require('../modules/pairHelpers');
var config = require('../modules/config');

// Require .env
require('dotenv').config();

router.post('/', message);

function message(req, res) {
  //require the Twilio module and create a REST client
  console.log('inside message', req);
  var client = require('twilio')(process.env.accountSid, process.env.authToken);
  console.log('inside message')
  client.messages.create({
    to: "7142871507",
    from: "+17148315967",
    body: "test",
  }, function(err, message) {
    console.log(message.sid);
  });
}

module.exports = router
