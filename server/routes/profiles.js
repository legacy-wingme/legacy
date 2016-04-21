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

router.get('/', getProf);
router.post('/', postProf);

function getProf(req, res) {

}

function postProf(req, res) {
  var user = req.body;
  knex('users').insert(user)
    .then(function(ID) {
      user.ID = ID[0];

      res.json({
        success: true,
        message: 'User survey inserted into database'
      });
    });
}

// export router
module.exports = router;
