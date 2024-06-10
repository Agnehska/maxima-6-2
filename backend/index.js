import express from "express";

const app = express();

// app.HTTP_METHOD(PATH, CALLBACK)

app.get("/", (req, res) => {
  res.send("Hello from server!!!!");
});

// ----------------- 1 --------------

// app.post("/users", (req, res) => {
//   res.json([
//     { id: 1, name: "Jane Doe" },
//     { id: 2, name: "Ya vtoroi" },
//   ]);
// });

// app.get("/users", (req, res) => {
//   res.json([
//     { id: 1, name: "Jane Doe" },
//     { id: 2, name: "Ya vtoroi" },
//   ]);
// });

// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;

//   res.json({ id: id, name: "Fake name" });
// });

// app.delete("/users/:id", (req, res) => {
//   res.json(1);
// });

// ----------------- 2 --------------

// request params

// app.get("/users/:userId/profiles/:profileId", (req, res) => {
//   console.log(req.params);

//   const { userId, profileId } = req.params;

//   res.json({ id: userId, name: "Fake name", profileId });

//   console.log(userId, profileId);
// });

// request query

// app.get("/users/:userId/profiles/:profileId", (req, res) => {
//   const queryStringValues = req.query;

//   const { userId, profileId } = req.params;

//   res.json({
//     id: userId,
//     name: "Fake name",
//     profileId,
//     queryStringValues,
//   });

//   console.log(userId, profileId, queryStringValues);
// });

// request body

// app.use(express.json());

// app.post("/users/:userId/profiles/:profileId", (req, res) => {
//   const queryStringValues = req.query;
//   const params = req.params;
//   const body = req.body;

//   res.json({
//     params,
//     queryStringValues,
//     body,
//   });

//   console.log(params, queryStringValues, body);
// });

// ----------------- 3 --------------

app.use(express.json());

const fakeUser = {
  id: 4,
  name: "Jane Doe",
  email: "somemail@gmail.com",
};

app
  .route("/users")
  .post((req, res) => {
    res.send({ ...fakeUser, ...req.body });
  })
  .get((req, res) => {
    res.send({ "user data": "somedata" });
  })
  .put((req, res) => {
    res.send(fakeUser);
  })
  .delete((req, res) => {
    res.send(fakeUser);
  });

export default app;
