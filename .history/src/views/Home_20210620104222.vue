<template>
  <div>
    <shorcut></shorcut>
    <div class="mian">
      <div class="w flex">
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
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    shorcut,
    footerc,
    fl,
    fr,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.mian {
  background-color: #e1e1e1;
  .w {
    margin: 20px 0;
  }
}
</style>