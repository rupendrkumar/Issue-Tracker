const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = 'mongosh "mongodb+srv://cluster0.m6awew0.mongodb.net/" --apiVersion 1 --username rupendrakumar223com --password GRGszmTD7QMccTpp';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});


module.exports=db;  //Exports db
