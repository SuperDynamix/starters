const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// MiddleWares
app.use(cors())
app.use(express.json())

app.get("/", async (_, res) => {
  res.send('Welcome from Gite');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});