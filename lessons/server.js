const userRouter = require("../src/user-router");
const Application = require("../framework/Application");
const jsonParser = require("../framework/parseJson");
const parseUrl = require("../framework/parseUrl");
const { default: mongoose } = require("mongoose");

const PORT = 5000;

const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));

app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://test_user:k5Zocp03tbkAN3hf@cluster0.qffdsuf.mongodb.net/?retryWrites=true&w=majority');
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch {
    console.log(e)
  }
}

start()


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
