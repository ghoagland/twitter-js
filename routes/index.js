const express = require('express');
const router = express.Router();
const path = require('path')
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use(express.static(path.join(__dirname, "../public")))

// router.get("/stylesheets/style.css", function(req, res, next) {
//   res.sendFile("../public/stylesheets/style.css");
//   next()
// })

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res, next) {
  var name = req.params.name;
  var listOfTweets = tweetBank.find( {name: name} ); //finds elems of tweetBank data w/ name: name

  res.render( 'index', {tweets: listOfTweets});
});

module.exports = router;
