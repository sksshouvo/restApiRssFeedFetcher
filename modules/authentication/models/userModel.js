const { MongoClient, ServerApiVersion } = require('mongodb');
const password = process.env.DB_PASSWORD;
const encodedPassword = encodeURIComponent(password)

const uri = `mongodb+srv://rss_feed_fetcher:${encodedPassword}@testcluster.e3gnvkm.mongodb.net/?retryWrites=true&w=majority`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("rss_feed_fetcher").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);