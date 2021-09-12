const router = require('express').Router();
const Profile = require('./controllers/Profile');
const profileRequests = require('./controllers/profileRequests');
const getSpotsRoute = require('./controllers/getSpots').getSpotsRoute;
const { getMySpots, addNewSpot, getSpotDetails, updateSpotDetails } = require('./controllers/manageSpots')
const {getUser} = require('./controllers/getUser');

router.get('/profile', profileRequests.getProfile);
router.get('/my-profile', Profile.getProfile);
router.get('/profile', Profile.getProfile);
router.post('/create-account',Profile.createProfile);
router.get('/spots', getSpotsRoute);
router.post('/login', getUser);
router.get('/my-spots', getMySpots);
router.get('/spot-details', getSpotDetails);
router.put('/update-spot-details', updateSpotDetails);
router.post('/add-spot', addNewSpot);

module.exports = router;