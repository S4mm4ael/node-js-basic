const Router = require("../framework/Router")

const router = new Router()

const users =
  [
    { id: 1, username: 'Sam' },
    { id: 2, username: 'Alex' },
    { id: 3, username: 'Alndrey' },
  ]

router.get('/users', (req, res) => {
  res.writeHead(200, {
    'Content-type': 'application/json'
  })
  res.end(JSON.stringify(users))
})
router.post('/users', (req, res) => {
  res.end(JSON.stringify(users))
})

module.exports = router

