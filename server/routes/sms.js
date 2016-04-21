var express = require('express');
var router = express.Router();
var auth = require('../modules/auth');
var hp = require('../modules/helpers');
var db = require('../modules/pairHelpers');
var config = require('../modules/config');
var bodyParser = require('body-parser');

// Require .env
require('dotenv').config();

router.post('/', message);

function message(req, res) {
  //require the Twilio module and create a REST client
  var client = require('twilio')(process.env.accountSid, process.env.authToken);
  client.messages.create({
    to: req.body.phonenumber,
    from: "+17148315975",
    body: req.body.text,
  }, function(err, message) {
    console.log(message.sid);
  });
}

module.exports = router
