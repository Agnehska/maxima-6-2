import express from "express";
const app = express();

import authRouter from "./routes/auth-route.js";
import usersRouter from "./routes/users-route.js";
// import { auth } from "./middleware/auth.js";

app.use(express.json());

// app.use(auth);

app.use("/auth", authRouter);
app.use("/users", usersRouter);

app.get("/privacy-policy", (req, res) => {
  res.send("Our privacy policy");
});

app.all("*", (req, res) => {
  res.sendStatus(404).send("Not found");
});

export default app;
