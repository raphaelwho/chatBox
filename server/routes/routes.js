const router = require('express').Router();
const Profile = require('./controllers/Profile');
const getSpotsRoute = require('./controllers/getSpots').getSpotsRoute;

router.get('/my-profile', Profile.getProfile);
router.post('/create-account',Profile.createProfile);
router.get('/spots', getSpotsRoute);

module.exports = router;