<template>
  <div>
    <shorcut></shorcut>
    <div class="mian flex">
      <fl></fl>
      <fr></fr>
    </div>
    <footerc></footerc>
  </div>
</template>

<script>
import shorcut from "../components/shorcut/Shortcut";
import footerc from "../components/Footerc/footerc";
import fl from "../components/Fl/fl";
import fr from "../components/Fr/fr";
import Fr from "../components/Fr/fr.vue";
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
</style>