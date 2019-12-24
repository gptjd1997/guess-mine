import express from "express";
import { join } from "path";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.get("/", (req, res) => res.render("home"));

const handleServer = () => {
  return console.log(`Server running on http://localhost:${PORT}`);
};

app.listen(PORT, handleServer);
