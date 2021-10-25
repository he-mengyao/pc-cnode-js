<template>
  <div class="fl bradius-3">
    <div class="title flex pd-10 ai_c bradius-3">
      <div class="bgc-hover">全部</div>
      <div class="cursor blue">精华</div>
      <div class="cursor blue">分享</div>
      <div class="cursor blue">问答</div>
      <div class="cursor blue">招聘</div>
      <div class="cursor blue">客户端测试</div>
    </div>
    <div class="bd">
      <div
        v-for="(item, index) in arr"
        :key="index"
        class="flex flex_b bd-items ai_c pd-10"
      >
        <div class="">
          <div class="author">
            <img :src="item.author.avatar_url" alt="" />
          </div>
          <div class="count flex">
            <div class="reply-count">{{ item.reply_count }}</div>
            <span>/</span>
            <div class="visit-count">{{ item.visit_count }}</div>
          </div>
          <div></div>
          <div class="bd-title"></div>
        </div>
        <div class=""></div>
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
    .bd-items {
      height: 50px;
      .author img {
        height: 30px;
        width: 30px;
      }
      .count {
        width: 70px;
      }
    }
  }
}
</style>