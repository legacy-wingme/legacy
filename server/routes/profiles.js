var express = require('express');
var router = express.Router();
var auth = require('../modules/auth');
var hp = require('../modules/helpers');
var db = require('../modules/pairHelpers');
var config = require('../modules/config');

// we'll want to load the database module (knex) to make queries
var knex = require('../db');


/**
 *  router/profiles.js
 *
 *  API endpint: /api/profiles
 */

router.post('/', function(req, res) {
  console.log('inside profile post request on server side');
  knex('users').where({'username': req.body.username})
  .update({
    age: req.body.age,
    location: req.body.location,
    job: req.body.job,
    hobbies: req.body.hobbies,
    want: req.body.want,
    dealBreaker: req.body.dealBreaker,
    socialMedia: req.body.socialMedia,
    misc: req.body.misc
  }).then(function(data){
    console.log(data);
      res.json({
        success: true,
        message: 'User survey inserted into database'
      });
    })
});

// export router
module.exports = router;
