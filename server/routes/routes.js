
const router = require('express').Router();
const profileRequests = require('./controllers/profileRequests');
const getSpotsRoute = require('./controllers/getSpots').getSpotsRoute;

router.get('/profile', profileRequests.getProfile);
router.get('/spots', getSpotsRoute);

module.exports = router;