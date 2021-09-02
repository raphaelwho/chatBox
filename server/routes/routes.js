
const router = require('express').Router();
const profileRequests = require('./controllers/profileRequests');

router.get('/profile', profileRequests.getProfile);

module.exports = router;