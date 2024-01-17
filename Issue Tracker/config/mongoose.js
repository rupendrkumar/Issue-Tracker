const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = 'mongodb+srv://rupendrakumar223com:GRGszmTD7QMccTpp@cluster0.m6awew0.mongodb.net/cluster0?retryWrites=true&w=majority';

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
