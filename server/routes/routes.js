
const router = require('express').Router();
const profileRequests = require('./controllers/profileRequests');
const getSpots = require('./controllers/getSpots').getSpots;

router.get('/profile', profileRequests.getProfile);
router.get('/spots', getSpots);

module.exports = router;