<template>
  <div class="fr">
    <div class="inner pd-10">
      <div class="f14 p1 flex ai_c">CNode：Node.js专业中文社区</div>
      <div class="f13 p2">
        您可以
        <span class="line cursor">登录</span>
        或<span class="line cursor">注册</span>, 也可以
      </div>
      <div class="f14 login bradius-3 cursor">通过 GitHub 登录</div>
    </div>
    <div class="panel mr-20 bradius-3">
      <div class="title">无人回复的话题</div>
      <div class="flex item col flex_a pd-10 f14 items">
        <div class="text_overflow cursor">
          关于node 托管静态文件问题，求解答。
        </div>
        <div class="text_overflow cursor">我想问一下，http源码包在那里找</div>
        <div class="text_overflow cursor">
          从入门到实战 进阶式掌握Vue3完整知识体系
        </div>
        <div class="text_overflow cursor">
          React17 系统精讲 结合TS打造旅游电商平台
        </div>
        <div class="text_overflow cursor">
          毕设一课通 从开题到答辩高效完成（含全栈项目）
        </div>
      </div>
    </div>
    <div class="panel mr-20 bradius-3">
      <div class="title">
        积分榜&nbsp;
        <span class="top">TOP 100 >></span>
      </div>
      <div class="flex col flex_a pd-10 rank f13 items">
        <div class="line cursor">
          <span class="cursor-text">22730</span>i5ting
        </div>
        <div class="line cursor">
          <span class="cursor-text">15840</span>alsotang
        </div>
        <div class="line cursor">
          <span class="cursor-text">10045</span>atian25
        </div>
        <div class="line cursor">
          <span class="cursor-text">9350 </span>leapon
        </div>
        <div class="line cursor">
          <span class="cursor-text">8780 </span>jiyinyiyong
        </div>
        <div class="line cursor">
          <span class="cursor-text">7815 </span>yakczh
        </div>
        <div class="line cursor">
          <span class="cursor-text">6855 </span>im-here
        </div>
        <div class="line cursor">
          <span class="cursor-text">6135 </span>DevinXian
        </div>
        <div class="line cursor">
          <span class="cursor-text">5815 </span>chapgaga
        </div>
        <div class="line cursor">
          <span class="cursor-text">5375 </span>magicdawn
        </div>
      </div>
    </div>
    <div class="panel mr-20 bradius-3">
      <div class="title">友情社区</div>
      <div class="links flex col flex_a pd-10">
        <div>
          <img
            src="../../assets/images/ruby-china-20150529.png"
            alt=""
            class="cursor"
          />
        </div>
        <div>
          <img
            src="../../assets/images/golangtc-logo.png"
            alt=""
            class="img2 cursor"
          />
        </div>
        <div>
          <img
            src="../../assets/images/phphub-logo.png"
            alt=""
            class="cursor"
          />
        </div>
      </div>
    </div>
    <div class="panel mr-20 bradius-3">
      <div class="title">客户端二维码</div>
      <div class="code flex col ai_c mr-20">
        <div>
          <img src="../../assets/images/WechatIMG35.png" alt="" />
        </div>
        <div class="items">客户端源码地址</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.fr {
  width: 290px;
  .inner {
    height: 116px;
    background-color: #fff;
    .p1 {
      height: 50px;
    }
    span {
      color: #7e858b;
    }
    .login {
      width: 153px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      background-color: #5bc0de;
      color: #fff;
      margin-top: 10px;
      letter-spacing: 2px;
      &:hover {
        background-color: #4e94b1;
      }
    }
  }
  .panel {
    background-color: #fff;
    .item {
      height: 180px;
    }
    .top {
      color: #666666;
    }
    .rank {
      height: 335px;
      span {
        display: inline-block;
        width: 50px;
      }
    }
    .links {
      height: 180px;
      img {
        height: 50px;
      }
      .img2 {
        height: 35px;
        width: 153px;
      }
    }
    .code {
      height: 246px;
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
}
</style>