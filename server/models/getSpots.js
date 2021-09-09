const client = require('../../db/index.js').client;

const getSpots = () => {
  let query = `SELECT spot_id, host_id, lat, long, address, type, price, photo_url, ST_AsText(geom) AS geom FROM spots;`
  return client.query(query)
    .then((spots) => {
      console.log('SPOTS IN MODELS', spots.rows);
      let requiredSpots = spots.rows.map((spot) => {
        return {
          spot_id: spot.spot_id,
          address: spot.address,
          location: {
            lat: Number(spot.lat),
            lng: Number(spot.long)
          }
        }
      });
      console.log('REQUIRED SPOTS MODELS', requiredSpots)
      return requiredSpots;
    })
    .catch ((err) => {
      console.log('ERRRO GETTING SPOTS FROM DB IN MODELS', err)
    })
};

module.exports.getSpots = getSpots;