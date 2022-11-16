const path = require("path");
const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/api/users");

dotenv.config();

const DB = mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTION SUCCESSFUL!");
  });

const app = express();

//middleware

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());
// routes
app.use("/api/users", userRouter);

app.all("*", (request, response) => {
  response.send("Undefined route");
});

const port = 3001;
app.listen(port, () => {
  console.log(`server started on port ${port}. . .`);
});
