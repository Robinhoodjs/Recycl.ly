const express = require("express");
const bodyParser = require("body-parser");
const { readFile } = require("fs").promises;
var router = express.Router();
const app = express();

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));

let posts = [
    {
        title: "Great",
        text: "Nicejob",
        username: "error",
    },
];

let users = [
    {
        username: "error",
        password: "Iam",
    },
];

app.get("/", async (request, response) => {
    console.log("[Server]: GET /");
    response.send(await readFile("/index.html", "utf8"));
});

app.post("/api/posts/create", async (request, response) => {
    let article = request.body;
    console.log(article);
    if (article) {
        posts.push(article);
    }
    response.send("okay");
});

app.post("/api/login", urlencodedParser, function (req, res) {
    let pass = req.body.password;
    let user = req.body.username;
    let loggedIn = users.filter((e) => e.password == pass && e.username == user);
    res.send(loggedIn.length);
});

app.post("/api/signup", urlencodedParser, function (req, res) {
    let user = request.body;
    console.log(user);
    if (user) {
        users.push(user);
    }
    response.send("okay");
});

app.get("/api/posts", async (request, response) => {
    response.json(posts);
});

app.listen(process.env.PORT || 3000, () => console.log(`App avaliable on http://localhost:3000`));
