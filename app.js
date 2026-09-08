const express = require("express");
const app = express();

const tourRouter = require("./routes/tourRouter.js");
const userRouter = require("./routes/userRouter.js");

app.use(express.json());

app.use("/tours", tourRouter);
app.use("/users", userRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});