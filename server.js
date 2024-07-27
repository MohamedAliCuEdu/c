const express = require('express')

const app = express();

app.get("/", (req, res) => {
  res.send("hhi")
});

app.listen(process.env.PORT || 3500, () => {
  console.log("connected")
})