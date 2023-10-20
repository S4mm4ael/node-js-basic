const http = require('http');
const EventEmitter = require('events');
const Router = require('../framework/Router')


const PORT = 5000;
const emitter = new EventEmitter();


const router = new Router();

router.get("/users", (req, res) => {
  res.end("YOU SEND REQUEST TO /USERS")
})
router.get("/posts", (req, res) => {
  res.end("YOU SEND REQUEST TO /POSTS")
})


const server = http.createServer(

  //res.end(req.url)

  // res.writeHead(200, {
  //   'Content-type': 'text/html; charset=utf-8'
  // })
  // res.writeHead(200, {
  //   'Content-type': 'application/json'
  // })
  // if (req.url === '/users') {
  //   return res.end("<h1>USERS</h1>")
  // }

  // if (req.url === '/posts') {
  //   return res.end(JSON.stringify([{
  //     id: 1, name: 'Test post'
  //   }]))
  // }
  // res.end('<h1>Server is running!</h1>')
  // res.end(req.url)
})

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))