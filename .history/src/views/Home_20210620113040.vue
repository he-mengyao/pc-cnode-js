<template>
  <div>
    <shorcut></shorcut>
    <div class="mian">
      <div class="w flex flex_b">
        <fl></fl>
        <fr></fr>
      </div>
    </div>
    <footerc></footerc>
  </div>
</template>

<script>
import shorcut from "../components/shorcut/Shortcut";
import footerc from "../components/Footerc/footerc";
import fl from "../components/Fl/fl";
import fr from "../components/Fr/fr";
import axios from "../axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: {},
    };
  },
  components: {
    shorcut,
    footerc,
    fl,
    fr,
  },
  methods: {
    getData() {
      axios
        .get("https://cnodejs.org/api/v1/topics")
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log("请求失败");
        });
    },
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.mian {
  background-color: #e1e1e1;
  .w {
    padding: 20px 0;
  }
}
</style>