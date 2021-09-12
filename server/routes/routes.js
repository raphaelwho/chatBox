const router = require('express').Router();
const Profile = require('./controllers/Profile');
const profileRequests = require('./controllers/profileRequests');
const getSpotsRoute = require('./controllers/getSpots').getSpotsRoute;
const {getUser} = require('./controllers/getUser');

router.get('/profile', profileRequests.getProfile);
router.get('/my-profile', Profile.getProfile);
router.get('/profile', Profile.getProfile);
router.post('/create-account',Profile.createProfile);
router.get('/spots', getSpotsRoute);
router.post('/login', getUser);

module.exports = router;