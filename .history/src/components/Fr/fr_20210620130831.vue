<template>
  <div class="fr">
    <div class="inner pd-10">
      <div class="f14 p1 flex ai_c">CNode：Node.js专业中文社区</div>
      <div class="f13 p2">
        您可以
        <span class="line">登录</span>
        或<span class="line">注册</span>, 也可以
      </div>
      <div class="f14 login bradius-3">通过 GitHub 登录</div>
    </div>
    <div class="panel mr-20 bradius-3">
      <div class="title">无人回复的话题</div>
      <div class="flex item col flex_a pd-10">
        <div class="text_overflow">关于node 托管静态文件问题，求解答。</div>
        <div class="text_overflow">我想问一下，http源码包在那里找</div>
        <div class="text_overflow">从入门到实战 进阶式掌握Vue3完整知识体系</div>
        <div class="text_overflow">React17 系统精讲 结合TS打造旅游电商平台</div>
        <div class="text_overflow">
          毕设一课通 从开题到答辩高效完成（含全栈项目）
        </div>
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
    }
  }
  .panel {
    background-color: #fff;
    .item {
      color: #798086;
      height: 180px;
    }
  }
}
</style>