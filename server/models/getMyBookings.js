const client = require('../../db/index.js').client;

const getMyBookings = (id) => {
  let query = `SELECT * FROM bookings WHERE renter_id=$1 ORDER BY booking_id`;
  let values = [id]
}

module.exports.getMyBookings = getMyBookings;