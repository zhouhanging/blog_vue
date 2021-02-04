// @login & register
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Article = require('../../models/Article');
const bcrypt = require('bcryptjs');


// @route  GET api/articles/test
// @desc   返回的请求的json数据
// @access public
router.get('/test', (req, res) => {
  res.json({ msg: 'article works' });
});

// @route  POST /api/articles/add
// @desc   创建信息接口
// @access Private
router.post(
  '/add',
  //  passport.authenticate('jwt', { session: false }),
    (req, res) => {
    const articleFields = {};
    if (req.body.author_name) articleFields.author_name = req.body.author_name;
    if (req.body.category) articleFields.category = req.body.category;
    if (req.body.summary) articleFields.summary = req.body.summary;
    if (req.body.title) articleFields.title = req.body.title;
    if (req.body.date) articleFields.date = req.body.date;
    if (req.body.content) articleFields.content = req.body.content;
    articleFields.start_counts=0;
    articleFields.view_counts=0;

    new Article(articleFields).save().then(article => {
      res.json(article);
      console.log(article)
    });
  }
);

// @route  GET api/articles
// @desc   获取所有信息
// @access Private

router.get(
  '/',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Article.find()
      .then(article => {
        if (!article) {
          return res.status(404).json('没有任何内容');
        }
        res.json(article);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route  GET api/articles/:id
// @desc   获取单个信息
// @access Private

router.get(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  (req,res) => {
    console.log( req.params.id)
    Article.findOne({_id:req.params.id})
    .then(article => {
        if (!article) {
          return res.status(404).json('没有任何内容');
        }
        res.json(article);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route  POST api/articles/starts
// @desc   点赞数加一
// @access Private
router.post('/startAdd/:id',(req,res)=>{
  const articleFields={};
  Article.findOneAndUpdate(
    { _id: req.params.id },
    { $set: profileFields },
    { new: true }
  )
})

// @route  POST api/articles/viewAdd
// @desc   浏览数加一
// @access Private
router.post('/startAdd/:id',(req,res)=>{
  const articleFields={};
  Article.findOneAndUpdate(
    { _id: req.params.id },
    { $set: profileFields },
    { new: true }
  )
})


// @route  POST api/articles/edit
// @desc   编辑信息接口
// @access Private
router.post(
  '/edit/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const profileFields = {};

    if (req.body.type) profileFields.article_id = req.body.article_id;
    if (req.body.describe) profileFields.author_name = req.body.author_name;
    if (req.body.income) profileFields.title = req.body.title;
    if (req.body.expend) profileFields.category = req.body.category;
    if (req.body.cash) profileFields.category = req.body.category;
    if (req.body.remark) profileFields.category = req.body.category;
    Article.findOneAndUpdate(
      { _id: req.params.id },
      { $set: profileFields },
      { new: true }
    ).then(article => res.json(article));
  }
);

// @route  POST api/articles/delete/:id
// @desc   删除信息接口
// @access Private


// @route  POST api/articles/delete/:id
// @desc   删除信息接口
// @access Private
router.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Article.findOneAndRemove({ _id: req.params.id })
      .then(article => {
        article.save().then(article => res.json(article));
      })
      .catch(err => res.status(404).json('删除失败!'));
  }
);

module.exports = router;
