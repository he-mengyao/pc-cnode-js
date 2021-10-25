<template>
  <div>
    <div class="shorcut">
      <div class="w flex flex_b ai_c">
        <div class="fl flex">
          <div class="flex ai_c">
            <img src="../../assets/images/logo.jpg" alt="" />
            <input type="text" />
          </div>
          <div></div>
        </div>
        <div class="fr flex">
          <div>首页</div>
          <div>新手入门</div>
          <div>API</div>
          <div>关于</div>
          <div>注册</div>
          <div>登录</div>
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
.shorcut {
  height: 50px;
  background-color: #444444;
  .w {
    width: 1296px;
    margin: 0 auto;
    height: 50px;
    .fl {
      img {
        width: 120px;
        height: 28px;
      }
      input {
        width: 233px;
        height: 26px;
        margin-left: 10px;
        padding-left: 25px;
        border-radius: 13px;
        background-color: #888888;
        background-image: url(../../assets/images/btn.png);
        background-position: 5px 5px;
        background-repeat: no-repeat;
        &:hover {
          background-color: #fff;
        }
      }
    }
    .fr {
      color: #bfbfbf;
      div {
        margin: 0 16px;
        :hover {
          background-color: #fff;
        }
      }
    }
  }
}
</style>