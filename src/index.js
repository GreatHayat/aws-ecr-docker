const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ success: true, message: "Happy AWS ECR Learning" });
});

app.listen(5001, () => console.log("App is listining on port 5001"));
