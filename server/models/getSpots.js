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
      throw err;
    })
};

const getNearbySpots = (lat, long) => {
  let location = `POINT(${lat} ${long})`;
  let query = `SELECT spot_id FROM spots WHERE ST_DWithin(geom, ST_GeomFromText($1, 4326)::geography, 500);`;
  let values = [location];
  console.log('VALUES', values);
  return client.query(query, values)
    .then((spots) => {
      console.log('NEARBY SPOTS', spots.rows)
      return spots.rows;
    })
    .catch ((err) => {
      console.log('ERROR GETTING NEARBY SPOTS FROM DB IN MODELS', err);
      throw err;
    })
}

const getFreeSpots = (lat, long, userStartTime, userEndTime) => {
  let location = `POINT(${lat} ${long})`;
  let nearbyValues = [location];
  let nearbyQuery = `SELECT spot_id, host_id, lat, long, address, type, price, photo_url FROM spots WHERE ST_DWithin(geom, ST_GeomFromText($1, 4326)::geography, 1000);`;

  let availableValues = [userStartTime, userEndTime]
  let availableQuery = `
    SELECT spot_id
    FROM bookings
    WHERE (
      ($1 >= start_time AND $1 < end_time)
      OR ($1 < start_time AND $2 > end_time)
      OR ($2 > start_time AND $2 <= end_time)
    );
    `;
  let promises = [];
  promises.push(client.query(nearbyQuery, nearbyValues));
  promises.push(client.query(availableQuery, availableValues));

  return Promise.all(promises)
    .then((resolved) => {
      let nearbySpots = resolved[0].rows;
      let conflictedSpots = resolved[1].rows;
      console.log('NEARBY', nearbySpots, 'CONFLICTED SPACES', conflictedSpots)
      let filteredSpots = nearbySpots.filter((nearbySpot) => {
        for (let i = 0; i < conflictedSpots.length; i++) {
          if (nearbySpot.spot_id === conflictedSpots[i].spot_id) {
            return false;
          }
          continue;
        }
        return true;
      });
      console.log('FILTERED SPOTS', filteredSpots)
      let requiredSpots = filteredSpots.map(({ spot_id, host_id, address, lat, long, type, price, photo_url }) => {
        return {
          spot_id,
          host_id,
          address,
          type,
          price,
          photo_url,
          location: {
            lat: Number(lat),
            lng: Number(long)
          }
        }
      })
      console.log('REQUIRED SPOTS', requiredSpots)
      return requiredSpots;
    })
    .catch((err) => {
      console.log('ERROR GETTING FREE SPOTS FROM DB IN MODELS', err);
      throw err;
    })
}

// getFreeSpots(35.36528232408647, -120.85140906483694, 1631314800, 1631318400); //4-5pm

module.exports.getSpots = getSpots;
module.exports.getNearbySpots = getNearbySpots;
module.exports.getFreeSpots = getFreeSpots;