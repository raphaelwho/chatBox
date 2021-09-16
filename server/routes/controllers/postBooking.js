const models = require('../../models/index.js');

const postBooking = (req, res) => {
  models.postBooking(req.body)
    .then((data) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
    })
};

module.exports.postBooking = postBooking;