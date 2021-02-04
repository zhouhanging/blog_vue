// @login & register
const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const comment = require('../../models/comment');

// @route  GET api/comment/test
// @desc   返回的请求的json数据
// @access public
router.get('/test', (req, res) => {
  res.json({ msg: 'comment works' });
});

// @route  POST api/comment/add
// @desc   添加留言
// @access Private
router.post(
  '/add',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const commentFields = {};
    if (req.body._id) commentFields._id = req.body._id;
    if (req.body.user_name) commentFields.user_name = req.body.user_name;
    if (req.body.content) commentFields.content = req.body.content;
    if (req.body.date) commentFields.date = req.body.date;

    new comment(commentFields).save().then(comment => {
      res.json(comment);
    });
  }
);


// @route  GET api/comment/:id
// @desc   获取文章留言
// @access Private

router.get(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    comment.findOne({ _id: req.params.id })
      .then(comment => {
        if (!comment) {
          return res.status(404).json('没有任何内容');
        }

        res.json(comment);
      })
      .catch(err => res.status(404).json(err));
  }
);


// @route  POST api/comment/delete/:id
// @desc   删除留言
// @access Private
router.delete(
  '/delete/:id',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    comment.findOneAndRemove({ _id: req.params.id })
      .then(comment => {
        comment.save().then(comment => res.json(comment));
      })
      .catch(err => res.status(404).json('删除失败!'));
  }
);

module.exports = router;
