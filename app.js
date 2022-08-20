const express = require ('express');
const bodyPaerser = require('body-parser')


const app = express();

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has Started");
})