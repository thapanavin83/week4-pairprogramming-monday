const express = require("express");
const app = express();

const tourRouter = require("./routes/tourRouter.js");

app.use(express.json());

app.use("/tours", tourRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});