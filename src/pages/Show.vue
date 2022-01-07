<template>
  <div class="show">
    <div class="showClass">
      <p>{{ articleDetail.title }}</p>
    </div>
    <div class="showAuthor">
      <span>作者：{{ articleDetail.author_name }} </span>
      <div class="ar_info">
        <span>
          <i class="iconfont icon-zanpress"></i> {{ articleDetail.view_counts }}
        </span>

        <span>
          <i class="iconfont icon-huore"></i> {{ articleDetail.start_counts }}
        </span>
        <span> {{ articleDetail.date }}</span>
      </div>
    </div>
    <div class="showDetail">
      <mavon-editor
        class="md"
        :value="articleDetail.content"
        :subfield="prop.subfield"
        :defaultOpen="prop.defaultOpen"
        :toolbarsFlag="prop.toolbarsFlag"
        :editable="prop.editable"
        :scrollStyle="prop.scrollStyle"
      ></mavon-editor>
      <!-- <div v-html="value"></div> -->
    </div>
    <div class="showComment">
      欢迎评论
      <Comment :comments="commentData" />
    </div>
  </div>
</template>

<script>
import Comment from "../components/Comment";
export default {
  components: { Comment },
  name: "Show",

  data() {
    return {
      id: "",
      value: "",
      showList: [],
      articleDetail: {
        title: "",
        user_name: "",
        category: "",
        content: "",
        date: "",
        start_counts: "",
        view_counts: "",
      },
      commentData: [],
      comments: {
        status: "成功",
        code: 200,
        data: [
          {
            id: "comment0001", //主键id
            date: "2018-07-05 08:30", //评论时间
            ownerId: "talents100020", //文章的id
            fromId: "errhefe232213", //评论者id
            fromName: "犀利的评论家", //评论者昵称
            fromAvatar:
              "http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg", //评论者头像
            likeNum: 3, //点赞人数
            content: "非常靠谱的程序员", //评论内容
            reply: [
              //回复，或子评论
              {
                id: "34523244545", //主键id
                commentId: "comment0001", //父评论id，即父亲的id
                fromId: "observer223432", //评论者id
                fromName: "夕阳红", //评论者昵称
                fromAvatar:
                  "https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg", //评论者头像
                toId: "errhefe232213", //被评论者id
                toName: "犀利的评论家", //被评论者昵称
                toAvatar:
                  "http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg", //被评论者头像
                content: "赞同，很靠谱，水平很高", //评论内容
                date: "2018-07-05 08:35", //评论时间
              },
              {
                id: "34523244545",
                commentId: "comment0001",
                fromId: "observer567422",
                fromName: "清晨一缕阳光",
                fromAvatar:
                  "http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg",
                toId: "observer223432",
                toName: "夕阳红",
                toAvatar:
                  "https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg",
                content: "大神一个！",
                date: "2018-07-05 08:50",
              },
            ],
          },
          {
            id: "comment0002",
            date: "2018-07-05 08:30",
            ownerId: "talents100020",
            fromId: "errhefe232213",
            fromName: "毒蛇郭德纲",
            fromAvatar:
              "http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg",
            likeNum: 0,
            content: "从没见过这么优秀的人",
            reply: [],
          },
        ],
      },

      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
      },
    };
  },
  created() {
    this.commentData = this.comments.data;
    this.getAllArticles();
    // this.getId()
    this.viewAdd();
  },
  methods: {
    getId() {
      this.id = this.$route.params._id;
      console.log("this.id ==>" + this.id);
    },
    viewAdd() {
      this.$axios(`api/articles/:${this.id}`, (req, res) => {
        console.log(浏览数加一);
      });
    },
    getComment() {
      this.$axios(`/api/comments/${this._id}`)
        .then((res) => {
          console.log(res.data);
          let art = res.data;
          this.articleDetail.title = art.title;
          this.articleDetail.author_name = art.author_name;
          this.articleDetail.category = art.category;
          this.articleDetail.content = art.content;
          this.articleDetail.date = art.date;
          // let json_date = new Date(art.date).toJSON();
          // this.articleDetail.date=new Date(+new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        })
        .catch((error) => {
          console.log(console.log(error));
        });
    },
    getAllArticles() {
      // 获取数据
      this.$axios(`/api/articles/${this._id}`)
        .then((res) => {
          console.log(res.data);
          let art = res.data;
          this.articleDetail.title = art.title;
          this.articleDetail.author_name = art.author_name;
          this.articleDetail.category = art.category;
          this.articleDetail.content = art.content;
          let json_date = new Date(art.date).toJSON();
          this.articleDetail.date = new Date(
            +new Date(json_date) + 8 * 3600 * 1000
          )
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");
          this.articleDetail.start_counts = art.start_counts;
          this.articleDetail.view_counts = art.view_counts;
        })
        .catch((error) => {
          console.log(console.log(error));
        });
    },
  },

  computed: {
    _id() {
      return this.$route.params._id;
    },
    prop() {
      let data = {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true,
      };
      return data;
    },
  },
};
</script>

<style lang="less" scoped>
.show {
  margin: 0 auto;
  display: flex;
  width: 60%;
  flex-direction: column;
  .showClass {
    p {
      font-size: 32px;
      font-weight: 900px;
      font-family: cursive;
      margin: 30px;
      padding: 20px auto;
      text-align: center;
    }
  }
  .showAuthor {
    display: flex;
    justify-content: space-around;
    span {
      height: 30px;
      line-height: 30px;
      color: rgb(85, 85, 84);
      font-size: 18px;
    }
  }
  .showDetail {
    margin-top: 20px;
    .ar_info {
      height: 20px;
      line-height: 20px;
      display: flex;
      align-self: flex-end;
      justify-content: flex-end;
      margin-right: 10px;
      span {
        margin: 0 5px;
        color: rgb(150, 147, 147);
      }
    }
  }
  .showComment {
    width: 80%;
    margin: 30px;
   
  }
}
</style>