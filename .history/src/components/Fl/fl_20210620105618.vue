<template>
  <div class="fl bradius-3">
    <div class="title flex mr-10 ai_c bradius-3">
      <div class="bgc-hover">全部</div>
      <div>精华</div>
      <div>分享</div>
      <div>问答</div>
      <div>招聘</div>
      <div>客户端测试</div>
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
.fl {
  width: 991px;
  background-color: #fff;
  .title {
    height: 40px;
    background-color: #f6f6f6;
    div {
      margin: 0 10px;
      padding: 3px;
      border-radius: 3px;
    }
  }
}
</style>