const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});