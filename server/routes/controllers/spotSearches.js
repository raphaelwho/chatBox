const { client } = require('../../../db');

module.exports = {
  getSpots: (req, res) => {
      const { lat, long } = req.query;
      console.log(lat, long);
      // const query = "SELECT * FROM austinrecycling WHERE business_name = 'AutoZone'";
      // //const query = 'SELECT NOW() as now';

      const query = `SELECT jsonb_build_object(
        'type',
        'FeatureCollection',
        'features',
        jsonb_agg(feature)
    )
FROM (
        SELECT jsonb_build_object(
                'type',
                'Feature',
                'id',
                ogc_fid,
                'geometry',
                ST_AsGeoJSON(wkb_geometry)::jsonb,
                'properties',
                to_jsonb(row) - 'ogc_fid' - 'wkb_geometry'
            ) AS feature
        FROM (
                SELECT *,
                    ST_Distance(
                        ST_GEOGFromWKB(wkb_geometry),
                        -- Los Angeles (LAX)
                        ST_GEOGFromWKB(st_makepoint(-97.7624043, 30.523725))
                    ) as distance
                from austinrecycling
                order by distance
                limit 25
            ) row
        where distance < 16090
    ) features`

      client.query(query)
        .then((results) => {
          res.status(200).send(results);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err);
        })

  }
}