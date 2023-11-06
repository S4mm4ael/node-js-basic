let users =
  [
    { id: 1, username: 'Sam' },
    { id: 2, username: 'Alex' },
    { id: 3, username: 'Andrey' },
  ]

const getUsers = (req, res) => {
  if (req.params.id) {
    return res.send(users.find(user => user.id == req.params.id))
  }
  res.send(users)
}

const createUser = (req, res) => {
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