<template>
  <div class="fl pd-10">
    <div class="title flex">
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
    background-color: #f6f6f6;
    div {
      margin: 0 8px;
    }
  }
}
</style>