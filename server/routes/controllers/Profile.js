const models = require('../../models/index.js');


const getProfile = async (req,res) =>{
  try {
    const newPost = await models.getProfile(req.body);
    res.status(201).json(newPost)
  }catch(error) {
    console.log(error)
    res.status(500).send(error)
  }
}
const createProfile = async (req,res) =>{
  console.log("req.body",req.body)
  try {
    const newPost = await models.createProfile(req.body);
    res.status(201).json(newPost)
  }catch(error) {
    console.log(error)
    res.status(500).send(error)
  }
}

module.exports = {
  getProfile,
  createProfile
}
