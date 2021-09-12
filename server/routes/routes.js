const router = require('express').Router();
const Profile = require('./controllers/Profile');
const getSpotsRoute = require('./controllers/getSpots').getSpotsRoute;
const profileRequests = require('./controllers/profileRequests');
const {getUser} = require('./controllers/getUser');

router.get('/profile', profileRequests.getProfile); // only for testing


router.get('/my-profile/:user_id', Profile.getProfile);
router.post('/create-account',Profile.createProfile);
router.put('/update-my-profile',Profile.updateProfile);;
router.get('/spots', getSpotsRoute);
router.post('/login', getUser);

module.exports = router;