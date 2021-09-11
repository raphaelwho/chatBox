const client = require('../../db/index.js').client;

exports.getProfile = async (user_id) => {
  try {
    let query = `SELECT user_id,username,password,first_name,last_name ,email FROM users WHERE user_id = ${user_id}`;
    let ans = await client.query(query);
    return ans.rows[0];
  } catch (error) {
    throw error;
  }
}

exports.createProfile = async (post) => {

  const {username,password,email,firstName,lastName}= post;
  let query = `INSERT INTO users (user_id,username, password, first_name, last_name, email) VALUES (default,'${username}','${password}','${firstName}','${lastName}','${email}')  ON CONFLICT (username) DO NOTHING`;
  console.log(query)
  try {
    let ans = await client.query(query);
    return ans;
  } catch (error) {
    throw e
    rror;
  }
}

exports.updateProfile = async (user_id) =>{
  try {
    let query = `SELECT user_id, username, password, first_name, last_name, email FROM users WHERE user_id = ${user_id} `;
    let ans = await client.query(query);
    return ans;
  } catch (error) {
    throw error;
  }
}

exports.getUser = async (username) => {
  // console.log('getUser from models username: ', username);
  let query = `SELECT user_id, password FROM users where username='${username}';`;
  try {
    let user = await client.query(query);
    return user.rows[0];
  } catch (err) {
    console.log('err from models: ', err);
    // return err;
  }
};


