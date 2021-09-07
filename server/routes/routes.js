const router = require('express').Router();
const profileRequests = require('./controllers/profileRequests');
const spotSearches = require('./controllers/spotSearches');

router.get('/profile', profileRequests.getProfile);

router.get('/spots', spotSearches.getSpots);

module.exports = router;