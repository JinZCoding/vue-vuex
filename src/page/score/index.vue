<template>
    <div>
        <div class="your_score">
            <header>
                <span class="score_num">{{score}}</span>
                <span class="fen">分！</span>
            </header>
            <div class="score_detail">{{scoreTips}}</div>
        </div>
        <div class="share_button" @click="showCover"></div>
        <div class="share_code">
            <header class="share_header">关注毅想天开，获取答案。</header>
            <img class="code_img" src="../../images/4-4.jpg" alt="" height="212" width="212">
        </div>
        <div class="share_cover" v-show="showHide" @click="showCover">
            <img src="../../images/5-2.png" class="share_img">
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "score",
  data() {
    return {
      showHide: false, //是否显示提示信息
      score: 0, //最终分数
      scoreTips: "",
      rightAnswer: [2, 7, 12, 13, 18],
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，快加入我们吧！"
      ]
    };
  },
  computed: {
    ...mapState(["answerid"])
  },
  methods: {
    //计算分数
    computedScore() {
      this.answerid.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          this.score += 20;
        }
      });
    },
    //分数描述
    getScoreTip: function() {
      let index = Math.ceil(this.score / 20) - 1;
      this.scoreTips = this.scoreTipsArr[index];
    },

    //是否显示提示
    showCover: function() {
      this.showHide = !this.showHide;
      //   console.log(this.score)
    }
  },
  created() {
    this.computedScore();
    this.getScoreTip();
    // console.log(this.answerid);
    // document.body.style.backgroundImage = "url(../../images/4-1.jpg)";
  }
};
</script>

<style lang="less">
body {
  background-image: url(../../images/4-1.jpg);
  padding-top: 1.2rem;
}
.your_score {
  width: 9.7rem;
  height: 9.1rem;
  background: url(../../images/4-2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  header {
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: "Microsoft YaHei";
    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .fen {
      color: #a51d31;
    }
  }
  .score_detail {
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
  }
}
.share_button {
  width: 6.025rem;
  height: 2.4rem;
  margin: 0.8rem auto 0;
  background: url(../../images/4-3.png) no-repeat 0.4rem 0;
  background-size: 5.825rem 100%;
}
.share_code {
  width: 5.3rem;
  margin: 1.5rem auto 0;
  .share_header {
    color: #664718;
    font-size: 0.475rem;
    font-family: "Microsoft YaHei";
    width: 7rem;
    font-weight: 500;
  }
  .code_img {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}
.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url(../../images/5-1.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share_img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
</style>
