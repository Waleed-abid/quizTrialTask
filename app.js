const express = require("express");
require("colors");
const port = 5000;
const db = require("./config/db.js");
const quizRoutes = require("./routes/quizRoute");
const app = express();
app.use(express.json());
db();
app.use("/quiz", quizRoutes);

app.listen(port, () => console.log(`Running on port ${port}`));
