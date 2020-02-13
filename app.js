import express from "express";

const app = express();

const handleHome = (req, res) => {
  res.send("HOME!");
};

const handleLogin = (req, res) => {
  res.send("Login");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

export default app;
