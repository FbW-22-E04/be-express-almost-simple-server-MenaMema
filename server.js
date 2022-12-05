import express from "express";
import { request } from "express";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3001;

const server = app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});

app.get("/hello", (request, response) => {
  console.log("hello form hello");
  response.send("hello from hello");
});

const event = new Date();
app.get("/time", (request, response) => {
  console.log(event.toString());
  response.send(event);
});

let randomNumber = Math.random().toString();

app.get("/random", (request, response) => {
  console.log(randomNumber);
  response.send(randomNumber);
});

app.get("/isNumber", (request, response) => {
  console.log("hello from isNumber", req.params.id);
  response.send();
});
