const models = require('../../models/index.js');

const getMyBookingsRoute = (req, res) => {
  return models.getMyBookings()
    .then((bookings) => {
      console.log('BOOKINGS CONTROLLER', bookings)
      // res.send(bookings)
    })
    .catch ((err) => {
      console.log('ERRRO GETTING BOOKINGS FROM DB IN CONTROLLER', err)
      res.sendStatus(500);
    })
};

module.exports.getMyBookingsRoute = getMyBookingsRoute;