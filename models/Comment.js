const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
  id: { 
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  content:{
    type:String,
  },
  date: {
    type: Date, 
    default: Date.now
  }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);
