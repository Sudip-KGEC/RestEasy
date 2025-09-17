
const mongoose = require('mongoose');
const Listing = require('../src/models/listing.model');
const initData = require('./data.js'); 

const MONGO_URL = 'mongodb://localhost:27017/ResteasyApp';

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data was initialized!");
};

main()
  .then(() => {
    console.log("Connected to DB");
    initDB();
  })
  .catch(err => console.log(err));