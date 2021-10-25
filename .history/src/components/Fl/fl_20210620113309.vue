<template>
  <div class="fl bradius-3">
    <div class="title flex mr-10 ai_c bradius-3">
      <div class="bgc-hover">全部</div>
      <div class="cursor blue">精华</div>
      <div class="cursor blue">分享</div>
      <div class="cursor blue">问答</div>
      <div class="cursor blue">招聘</div>
      <div class="cursor blue">客户端测试</div>
    </div>
    <div class="bd">
      <div v-for="(item, index) in arr" :key="index" class="flex">
        <div class="pd-10"></div>
        <div class="pd-10"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    arr: Array,
  },
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
      padding: 3px 5px;
      border-radius: 3px;
    }
  }
  .bd {
    background-color: #fff;
  }
}
</style>