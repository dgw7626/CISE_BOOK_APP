const mongoose = require('mongoose');
const db = "mongodb+srv://vercel-admin-user:Radeon233@cluster0.2rfglyp.mongodb.net/?retryWrites=true&w=majority";
const config = require('config');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;