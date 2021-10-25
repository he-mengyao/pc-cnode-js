<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/base";
body {
  font-size: 13px;
  .w {
    width: 1296px;
    margin: auto;
  }
  .line-blue:hover {
    text-decoration: underline;
    color: #21557c;
  }
  .blue:hover {
    color: #405f86;
  }
}
</style>