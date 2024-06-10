import express from "express";

const app = express();

// app.HTTP_METHOD(PATH, CALLBACK)

app.get("/", (req, res) => {
  res.send("Hello from server!!!!");
});

export default app;
