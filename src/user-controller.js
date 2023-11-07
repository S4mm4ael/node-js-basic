const User = require('./user-model')

const getUsers = async (req, res) => {
  if (req.params.id) {
    return res.send(users.find(user => user.id == req.params.id))
  }
  res.send(users)
}

const createUser = async (req, res) => {
  console.log(req.body)
  const user = req.body;
  users.push(user)
  res.send(user)
  console.log(users)
}

module.exports = {
  getUsers,
  createUser,
}