import express from "express";
import mongoose from "mongoose";
import router from "./authRouter.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/auth', router);

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/?directConnection=true&authMechanism=DEFAULT')
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()