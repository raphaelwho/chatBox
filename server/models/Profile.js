const client = require('../../db/index.js').client;

exports.getProfile = async (post) => {
  try {
    let query = `SELECT user_id,username,password, first_name,last_name ,email FROM users WHERE user_id =${post}`;
    let ans = await client.query(query);
    return ans;
  } catch (error) {
    throw error;
  }
}

exports.createProfile = async (post) => {
  try {
    let query = `INSERT INTO users(username,password, first_name,last_name ,email) VALUES(${Object.values(post).join(',')}) ON CONFLICT (username) DO NOTHING`;
    let ans = await client.query(query);
    return ans;
  } catch (error) {
    throw error;
  }
}

exports.updateProfile = async (post) =>{
  try {
    let query = `SELECT user_id, username, password, first_name, last_name, email FROM users WHERE user_id = ${ post } `;
    let ans = await client.query(query);
    return ans;
  } catch (error) {
    throw error;
  }
}


