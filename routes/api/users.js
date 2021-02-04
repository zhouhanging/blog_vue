// @login & register
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const keys = require('../../config/keys');
const passport = require('passport');
const User = require('../../models/User');

// @route  GET api/users/test
// @desc   返回的请求的json数据
// @access public

router.get('/test', (req, res) => {
  res.json({ msg: 'user works' });
});

// @route  POST api/users/register
// @desc   返回的请求的json数据
// @access public
//http://www.wxpad.cn/api/qqmsg.php?qq=3493329756
// http://www.wxpad.cn/api/qqmsg.php?qq=3493329756 通过qq获取头像和昵称
router.post('/register', (req, res) => {
  // 查询数据库中是否拥有邮箱
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json('邮箱已被注册!');
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',    
        d: 'mm'
      });
      // let num=req.body.email+'qq'
      // let qqnum=parseInt(num);
      // const avaterurl=''
      // this.$axios.get('http://www.wxpad.cn/api/qqmsg.php?',{
      //   params:{qq:qqnum} }).then(
      //     res=>{
      //       avaterurl=res.headimg
      //     }
      //   ).catch(
      //     error=>{console.log(error)}
      //   )

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });
      //Bcrypt是单向Hash加密算法
      //Bcrypt有四个变量：
      // saltRounds: 正数，代表hash杂凑次数，数值越高越安全，默认10次。
      // myPassword: 明文密码字符串。
      // salt: 盐，一个128bits随机字符串，22字符
      // myHash: 经过明文密码password和盐salt进行hash，
      //个人的理解是默认10次下 ，循环加盐hash10次，得到myHash

      //       //方式1：
      // bcrypt.genSalt(saltRounds, function(err, salt) {
      //   bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
      //       // Store hash in your password DB.
      //   });
      // });
      // //方式2 
      // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      // // Store hash in your password DB.
      // });

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route  POST api/users/login
// @desc   返回token jwt passport
// @access public

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // 查询数据库
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json('用户不存在!');
    }
    //校验密码
    //     // Load hash from your password DB.
    // bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    //   // 密码正确，会返回的res为true
    //   // res == true
    // });
    // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    //   // 密码不对，则返回的res 为false
    //   // res == false
    // });

    // 密码匹配
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const rule = {
          id: user.id,
          email:user.email,
          name: user.name,
          avatar: user.avatar,
          identity: user.identity
        };
        jwt.sign(rule, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        });
        // res.json({msg:"success"});
      } else {
        return res.status(400).json('密码错误!');
      }
    });
  });
});

// @route  GET api/users/current
// @desc   return current user
// @access Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      identity: req.user.identity
    });
  }
);

module.exports = router;
