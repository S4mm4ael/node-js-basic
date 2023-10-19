const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/html; charset=utf-8'
  })
  res.writeHead(200, {
    'Content-type': 'application/json'
  })
  if (req.url === '/users') {
    return res.end("<h1>USERS</h1>")
  }

  if (req.url === '/posts') {
    return res.end(JSON.stringify([{
      id: 1, name: 'Test post'
    }]))
  }
  res.end('<h1>Server is running!</h1>')
  // res.end(req.url)
})

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))