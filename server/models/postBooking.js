const db = require('../../db/index.js').client;

const postBooking = (bookingInfo) => {
  let { spot_id, renter_id, start_time, end_time } = bookingInfo;
  let query = `INSERT INTO bookings(spot_id, renter_id, start_time, end_time) VALUES ('${spot_id}', '${renter_id}', '${start_time}', '${end_time}')`;
  return db.query(query)
  .then((data) => {
    return data;
  })
  .catch((err) => {
    throw err;
  })
};

module.exports.postBooking = postBooking;