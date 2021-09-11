const Profile = require('../../models/Profile.js');


const getProfile = async (req,res) =>{
  try {
    const newPost = await Profile.getProfile(req.body);
    res.status(201).json(newPost)
  }catch(error) {
    console.log(error)
    res.status(500).send(error)
  }
}

module.exports = {
  getProfile
}
