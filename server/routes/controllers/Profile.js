const models = require('../../models/index.js');


const getProfile = async (req, res) => {
  try {
    const newPost = await models.getProfile(req.params.user_id);
    res.status(201).json(newPost)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
};

const createProfile = async (req, res) => {
  try {
    const result = await models.createProfile(req.body);
    console.log(result)
    res.status(201).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
};
const updateProfile = async (req, res) => {
  try {
    const { user_id, ...data } = req.body
    const result = await models.updateProfile(data, user_id);
    console.log(result)
    res.status(201).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
};

const getUser = async (req, res) => {
  try {
    let user = await models.getUser(req.body.username);
    if (!user) {
      res.send('noExistUser');
    } else if (req.body.password === user.password) {
      res.send(user);
    } else {
      res.send(`failLogin`)
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  getUser
}
