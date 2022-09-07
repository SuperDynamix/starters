const express = require('express');
const cors = require('cors');

const connectDatabase = require('./db/db');
const routes = require('./routes/user.routes');

const app = express();
const port = process.env.PORT || 3000;

// connect to database
connectDatabase();

// MiddleWares
app.use(cors());
app.use(express.json());

app.get("/", async (_, res) => {
  res.send('Welcome from Gite');
});

// use user api
app.use('/api/user', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});