<template>
  <div>
    <div class="shorcut">
      <div class="w flex flex_b ai_c">
        <div class="fl flex">
          <div class="flex ai_c">
            <img src="../../assets/images/logo.jpg" alt="" class="cursor" />
            <input type="text" />
          </div>
          <div></div>
        </div>
        <div class="fr flex">
          <div class="cursor nav">首页</div>
          <div class="cursor nav">新手入门</div>
          <div class="cursor nav">API</div>
          <div class="cursor nav">关于</div>
          <div class="cursor nav">注册</div>
          <div class="cursor" @click1="click1">登录</div>
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
    return {
      flag: true,
    };
  },
  components: {},
  methods: {
    click1() {
      this.$emit("click1", true);
    },
    islogin() {
      if (localStorage.getItem("a") !== null) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
  },
  mounted() {
    islogin();
  },
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
      .nav {
        margin: 0 16px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>