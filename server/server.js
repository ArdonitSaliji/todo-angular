const router = require("./routes/router");
const express = require("express");
const app = express();
const port = 3030;

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Working");
});
