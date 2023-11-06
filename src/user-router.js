const Router = require("../framework/Router")

const router = new Router()

let users =
  [
    { id: 1, username: 'Sam' },
    { id: 2, username: 'Alex' },
    { id: 3, username: 'Andrey' },
  ]

router.get('/users', (req, res) => {
  console.log(req.params)
  res.send(users)
  console.log(users)
})
router.post('/users', (req, res) => {
  console.log(req.body)
  const user = req.body;
  users.push(user)
  res.send(users)
})

module.exports = router

