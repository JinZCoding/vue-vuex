<template>
  <section>
    <header class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    </header>
    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style"></router-link>
    </div>
    <div v-if="fatherComponent == 'item'">
      <div class="item_bg item_container_style">
        <!-- 题目列表 -->
        <div class="item_list" v-if="itemDetail.length > 0">
          <header class="pro_tit">{{itemDetail[itemNum-1].topic_name}}</header>
          <ul>
            <!-- 遍历答案 -->
            <li v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="pro_list">
              <span class="pro_opt" :class="{'hasChoosed':choosedNum==index}">{{chooseType(index)}}</span>
              <span class="pro_ans">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
    	<span class="submit button_style" v-else @click="submitAnswer"></span>
    </div>
  </section>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "itemContainer",
  data() {
    return {
      itemId: null, //题目ID
      choosedNum: null, //选中答案索引
      choosedId: null //选中答案id
    };
  },
  props: ["fatherComponent"],
  computed:{
    ...mapState([
      "level", //第几周
      "itemNum", //第几题
      "itemDetail", //题目详情
      "timer" //计时器
    ]),
  },
  methods: {
    ...mapActions([
      "addNum",
      "initializeData"
    ]),

    //点击下一题  nextItem
    nextItem(){
      if(this.choosedNum !== null){
        this.choosedNum = null;
        this.addNum(this.choosedId);
        // this.itemNum++;
      }else{
        alert("您还没有选择答案哦~");
      }
    },

    //索引0-3对应A-D  chooseType
    chooseType: type => {
      switch (type){
        case 0:
          return 'A';
        case 1:
          return 'B';
        case 2:
          return 'C';
        case 3:
          return 'D';
      }
    },

    //选中的答案信息  choosed
    choosed(type, id){
     this.choosedNum = type;
     this.choosedId = id;
    },

    //最后一题 交卷 清空定时器 跳转分数页面 submitAnswer
    submitAnswer(){
      if(this.choosedNum !== null){
        this.addNum(this.choosedId);
        clearInterval(this.timer); 
        this.$router.push("score");
      }else{
        alert("您还没有选择答案哦~");
      }
    }
  },
  created() {
    if (this.fatherComponent == "home") {
      this.initializeData();
      // document.body.style.backgroundImage = "url(../../images/1-1.jpg)";
    }
  }
};
</script>

<style lang="less">
.top_tips {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: "黑体";
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}
.home_logo {
  background-image: url(../images/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.item_bg{
  background-image: url(../images/2-1.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.button_style {
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
}
.start{
  background-image: url(../images/1-4.png);
}
.next{
  background-image: url(../images/2-2.png);
}
.submit{
  background-image: url(../images/3-1.png);
}
.item_list{
  position: absolute;
  height: 7.0rem;
  width: 8.0rem;
  top: 2.4rem;
  left: 3rem;
  .pro_tit{
    font-size: 0.65rem;
    color: #fff;
    line-height: 0.7rem;
  }
  ul{
    .pro_list{
      width: 10rem;
      font-size: 0;
      margin-top: 0.4rem;
      span{
        display: inline-block;
        font-size: 0.6rem;
        color: #fff;
        vertical-align: middle;
      }
      .pro_opt{
        height: 0.725rem;
        width: 0.725rem;
        border: 1px solid #fff;
        border-radius: 50%;
        line-height: 0.725rem;
        text-align: center;
        margin-right: 0.3rem;
        font-size: 0.5rem;
        font-family: 'Arial';
      }
      .hasChoosed{
        background-color: #ffd400;
        color: #575757;
        border-color: #ffd400;
      }
      .pro_ans{
        width: 7rem;
        padding-top: 0.11rem;
      }
    }
  }
}

</style>
