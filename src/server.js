import express from "express";
import socketIO from "socket.io";
import { join } from "path";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => res.render("home"));

const handleServer = () => {
  return console.log(`Server running on http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleServer);

const io = socketIO(server);
