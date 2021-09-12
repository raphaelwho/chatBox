
const router = require('express').Router();
const profileRequests = require('./controllers/profileRequests');
const getSpotsRoute = require('./controllers/getSpots').getSpotsRoute;
const {getUser} = require('./controllers/getUser');

router.get('/profile', profileRequests.getProfile);
router.get('/spots', getSpotsRoute);
router.post('/login', getUser);

module.exports = router;