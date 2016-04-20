var express = require('express');
var router = express.Router();
var auth = require('../modules/auth');

// we'll want to load the database module (knex) to make queries
var knex = require('../db');


/**
 *  router/profile.js
 *
 *  API endpint: /api/profile
 */

//url /profile?

router.get('/', getProf);
router.post('/', postProf);

function getProf(req, res) {
  
}

    // knex('users').insert(user)
    //   .then(function(ID) {
    //     user.ID = ID[0];

    //     res.json({
    //       success: true,
    //       message: 'User inserted into database. Enjoy your token!',
    //       token: auth.genToken(user)
    //     });
    //   }, function(err) {
    //     var message = err.code;
        
    //     if (err.errno === 19) {
    //       message = 'username already exists!'
    //     }
    //     res.json({
    //       success: false,
    //       message: message
    //     });
    //   });
  


// helper functions
function validate(user) {
  console.log(user);
  return user.username && user.firstname && user.lastname && user.email && user.password;
}

// export router
module.exports = router;
