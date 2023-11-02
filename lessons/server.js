const userRouter = require("../src/user-router");
const Application = require("../framework/Application");
const jsonParser = require("../framework/parseJson");

const PORT = 5000;

const app = new Application();

app.use(jsonParser);
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
app.addRouter(userRouter);

// const server = http.createServer(

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
// }
// )
