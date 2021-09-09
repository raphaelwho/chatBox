const models = require('../../models/index.js');

const getSpotsRoute = (req, res) => {
  return models.getSpots()
    .then((spots) => {
      console.log('SPOTS CONTROLLER', spots)
      res.send(spots)
    })
    .catch ((err) => {
      console.log('ERRRO GETTING SPOTS FROM DB IN CONTROLLER', err)
      res.sendStatus(500);
    })
};

module.exports.getSpotsRoute = getSpotsRoute;