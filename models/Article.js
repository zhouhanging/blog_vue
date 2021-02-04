const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ArticleSchema = new Schema({
  author_name: {
    type: String,
    required: true
  },
  category: {   //分类
    type: String
  },
  summary: {   //分类
    type: String
  },
  title: {   //标题
    type: String,
    required: true
  },
  content: {   // 内容
    type: String,   
    required: true
  },
  view_counts	: {  //浏览量
    type: Number,
    required: true,
    default:0
  },
  start_counts: {  //start数
    type: Number,
    required: true,
    default:0
  },
  date: {    //创建时间
    type: Date,
    default: Date.now
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);
