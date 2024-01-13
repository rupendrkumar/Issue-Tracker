const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = '0.0.0.0./Mydb';

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
