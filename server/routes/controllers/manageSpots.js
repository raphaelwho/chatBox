const model = require('../../models/manageSpots.js')

const getMySpots = (req, res) => {
 // req.query.id = hostid
 model.getSpots(req.query.id)
   .then((spots) => {
     console.log('getting spots back to controller', spots);
     res.status(200);
     res.send(spots)
   })
   .catch((err) => {
     console.log('error getting spots from models');
   })
}

const addNewSpot = (req, res) => {
 // req.body = { hostId:   , lat:    , long:     , price:    , address:   , type:    , price:     , photo:    , }
 model.addSpot(req.body)
   .then(() => {
     console.log('success adding new post - controller');
     res.sendStatus(201);
   })
   .catch((err) => {
     console.log('error posting new spot - controller', err);
   })
}

const getSpotDetails = (req, res) => {
  // req.query.id = spotid
  model.getInfo(req.query.id)
   .then((info) => {
     console.log('getting spots details to controller', info);
     res.status(200);
     res.send(info);
   })
   .catch((err) => {
     console.log('error getting spot details from models', err);
   })
}

const updateSpotDetails = (req, res) => {
  // req.body = { photo:   , type:    , spotId:     , price:    }
  model.updateInfo(req.body)
    .then(() => {
      console.log('success updating spot details - controller');
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log('error updating spot details - controller', err);
    })

}

module.exports = {
  getMySpots,
  addNewSpot,
  getSpotDetails,
  updateSpotDetails
}