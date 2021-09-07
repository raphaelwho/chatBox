const router = require('express').Router();
const profileRequests = require('./controllers/profileRequests');
const controllers = require('./controllers');

router.get('/profile', profileRequests.getProfile);
router.get('/spots', controllers.findSpots);

module.exports = router;