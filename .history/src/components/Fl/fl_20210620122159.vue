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
        <div class="flex ai_c">
          <div class="author cursor">
            <img
              :src="item.author.avatar_url"
              alt=""
              :title="item.author.loginname"
            />
          </div>
          <div class="count flex ai_c flex_c">
            <div class="reply-count" title="回复数">
              {{ item.reply_count }}
            </div>
            <span>/</span>
            <div class="visit-count" title="点击数">
              {{ item.visit_count }}
            </div>
          </div>
          <div>
            <div v-if="item.top === true" class="bgc-hover">置顶</div>
            <div v-else-if="item.tab === 'share'" class="share">分享</div>
            <div v-else class="share">问答</div>
          </div>
          <div
            class="bd-title f16 cursor line"
            @click="click(item, index)"
            :class="{ active: index === num }"
            :title="item.title"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="flex timecount f12">12</div>
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
    return {
      num: -1,
    };
  },
  components: {},
  methods: {
    click(item, index) {
      this.num = index;
    },
  },
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
    color: #96b84f;
    div {
      margin: 0 10px;
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
        .reply-count {
          color: #9e78c0;
          font-size: 14px;
        }
        span {
          font-size: 12px;
        }
        .visit-count {
          font-size: 12px;
          color: #b4b4b4;
        }
      }
      .bd-title {
        color: #333;
        margin-left: 5px;
      }
    }
    .timecount {
      color: #778087;
    }
  }
}
</style>