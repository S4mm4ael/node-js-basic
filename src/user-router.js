const Router = require("../framework/Router")

const router = new Router()

const users =
  [
    { id: 1, username: 'Sam' },
    { id: 2, username: 'Alex' },
    { id: 3, username: 'Andrey' },
  ]

router.get('/users', (req, res) => {
  res.send(users)
})
router.post('/users', (req, res) => {
  res.send(users)
})

module.exports = router

