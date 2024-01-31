const mongoose = require('mongoose');

const password = process.env.DB_PASSWORD;
const encodedPassword = encodeURIComponent(password)

const url = `mongodb+srv://rss_feed_fetcher:${encodedPassword}@testcluster.e3gnvkm.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));