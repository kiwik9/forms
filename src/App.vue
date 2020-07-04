<template>
  <div class="bg-image">
    <router-view />
  </div>
</template>

<style>
  body,
  html {
    width: 100%;
    height: auto;
  }
body {
  background-image: url("assets/Image2.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.bg-image {
  width: 100%;
  height: 100%;
}
</style>
