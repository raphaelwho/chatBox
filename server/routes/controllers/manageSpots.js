const model = require('../../models/manageSpots.js')

const getMySpots = (req, res) => {
 // req.query.id
 model.getSpots(req.query.id)
   .then((spots) => {
     console.log('getting spots back to controller', spots);
     res.send(spots)
   })
   .catch((err) => {
     console.log('error getting spots from models');
   })
}

const addNewSpot = (req, res) => {
 // req.body
}

const getSpotDetails = (req, res) => {
  // req.query.id
  model.getInfo(req.query.id)
   .then((info) => {
     console.log('getting spots back to controller', info);
     res.send(info);
   })
   .catch((err) => {
     console.log('error getting spots from models');
   })
}

const updateSpotDetails = (req, res) => {
  // req.body
}

module.exports = {
  getMySpots,
  addNewSpot,
  getSpotDetails,
  updateSpotDetails
}