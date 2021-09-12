const router = require('express').Router();
const Profile = require('./controllers/Profile');
const profileRequests = require('./controllers/profileRequests');
const getSpotsRoute = require('./controllers/getSpots').getSpotsRoute;
const profileRequests = require('./controllers/profileRequests');
const {getUser} = require('./controllers/getUser');

router.get('/profile', profileRequests.getProfile); // only for testing
router.get('/my-profile/:user_id', Profile.getProfile);
router.post('/create-account',Profile.createProfile);
router.put('/update-my-profile',Profile.updateProfile);;
router.get('/spots', getSpotsRoute);
router.post('/login', getUser);
router.get('/my-spots', getMySpots);
router.get('/spot-details', getSpotDetails);
router.put('/update-spot-details', updateSpotDetails);
router.post('/add-spot', addNewSpot);

module.exports = router;