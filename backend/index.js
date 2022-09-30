const dotenv = require("dotenv");
const express = require("express");
var cors = require("cors");
const userRouter = require("./routes/user.route");
const solutionRouter = require("./routes/solution.route");

const app = express();
dotenv.config();
require("./config/config")();

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/solution", solutionRouter);

const PORT = 4000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT || PORT}`);
});
