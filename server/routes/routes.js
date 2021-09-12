
const router = require('express').Router();
const profileRequests = require('./controllers/profileRequests');
const getSpotsRoute = require('./controllers/getSpots').getSpotsRoute;
const { getMySpots, addNewSpot, getSpotDetails, updateSpotDetails } = require('./controllers/manageSpots')
const {getUser} = require('./controllers/getUser');

router.get('/profile', profileRequests.getProfile);
router.get('/spots', getSpotsRoute);
router.get('/my-spots', getMySpots);
router.get('/spot-details', getSpotDetails);
router.put('/update-spot-details', updateSpotDetails);
router.post('/add-spot', addNewSpot);
router.post('/login', getUser);

module.exports = router;