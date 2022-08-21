const express = require ('express');
const bodyPaerser = require('body-parser')


const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/dist/index.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has Started");
})