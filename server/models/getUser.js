const db = require('../../db/index.js').client;

const getUser = async (username) => {
  // console.log('getUser from models username: ', username);
  let query = `SELECT user_id, password FROM users where username='${username}';`;
  try {
    let user = await db.query(query);
    return user.rows[0];
  } catch (err) {
    console.log('err from models: ', err);
    // return err;
  }
};

module.exports = {getUser};