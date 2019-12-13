const express = require("express");
const app = express();
const port = "3000";
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("method"));

const db = require("./models");
const Todo = db.Todo;
const User = db.User;
app.get("/", (req, res) => {
  res.send("hello world");
});
// 使用路由器
app.use("/users", require("./routes/user"));
// 設定 express port 3000 與資料庫同步

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
