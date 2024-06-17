import express from "express";
import router from "./todo/todo-router.js";

const app = express();

app.use(express.json());

app.use('/todos', router)

app.get('/', (req, res) => {
  res.send('profile')
})

export default app;