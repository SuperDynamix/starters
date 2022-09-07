const mongoose = require('mongoose');

// Please add the MONGO_URL environment variable
if (!process.env.MONGO_URL) {
  throw new Error("Please add the MONGO_URL environment variable");
}

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDatabase;