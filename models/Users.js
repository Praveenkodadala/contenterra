const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserName: String,
    Email: String,
    Password:String
  }, {timestamps: true});
  
 module.exports= mongoose.model('User', userSchema);



