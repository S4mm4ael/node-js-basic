const http = require('http');
const EventEmitter = require('events');
const PORT = 5000;

const emitter = new EventEmitter();

class Router {
  constructor() {
    this.endpoints = {}
  }

  request(method = "GET", path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {}
    }
    const endpoint = this.endpoints[path];

    if (endpoint[method]) {
      throw new Error(`${method} on adress ${path} already exists`)
    }
    endpoint[method] = handler;

    emitter.on(`[${path}]:[${method}]`, (req, res) => {
      handler(req, res)
    })

  }
  get(path, handler) {
    this.request("GET", path, handler)
  }
  post(path, handler) {
    this.request("POST", path, handler)
  }
  put(path, handler) {
    this.request("PUT", path, handler)
  }
  delete(path, handler) {
    this.request("DELETE", path, handler)
  }
}

const router = new Router();

router.get("/users", (req, res) => {
  res.end("YOU SEND REQUEST TO /USERS")
})
router.get("/posts", (req, res) => {
  res.end("YOU SEND REQUEST TO /POSTS")
})


const server = http.createServer((req, res) => {
  const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)

  if (!emitted) {
    res.end()
  }

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