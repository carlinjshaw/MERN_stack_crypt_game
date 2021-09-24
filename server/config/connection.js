const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/crypt-crawler', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

// mongoose.set('useCreateIndex', true);
// mongoose.set('debug', true);

module.exports = mongoose.connection;