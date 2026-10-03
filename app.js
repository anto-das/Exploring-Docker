import express from "express";
import connectToDatabase from "./helper.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Docker!!!!");
});

await connectToDatabase()

app.listen(5000);
