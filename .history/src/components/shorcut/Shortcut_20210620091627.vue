<template>
  <div>
    <div class="shorcut">
      <div class="w flex flex_b ai_c">
        <div class="fl flex">
          <div><img src="../../assets/images/logo.jpg" alt="" /></div>
          <div></div>
        </div>
        <div class="fr">abc</div>
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
    }
  }
}
</style>