<template>
  <div class="fl">
    <div class="title flex mr-10 ai_c">
      <div>全部</div>
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
  border-radius: 3px;
  .title {
    height: 40px;
    background-color: #f6f6f6;
    border-radius: 3px;
    div {
      margin: 0 10px;
      padding: 5px;
    }
  }
}
</style>