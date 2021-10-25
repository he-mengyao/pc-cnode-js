<template>
  <div>
    <div class="footer w">
      <div class="links">RSS<span>|</span>源码地址</div>
      <div class="serve flex col flex_c">
        CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
        的技术研究。<br />
        服务器搭建在
        <img src="../../assets/images/digitalocean.png" alt="" class="di" />
        ，存储赞助商为
        <img src="../../assets/images/qiniu.png" alt="" class="qiniu" />
        新手搭建 Node.js 服务器，推荐使用无需备案的<br />
        <span>DigitalOcean(https://www.digitalocean.com/)</span>
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
.footer {
  height: 195px;
  background-color: pink;
  padding: 20px 0;
  color: #e2e2e2;
  .links {
    color: #6666;
    span {
      margin: 0 5px;
    }
  }
  .serve {
    height: 140px;
    font-size: 14px;
  }
}
</style>