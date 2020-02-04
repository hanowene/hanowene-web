<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="block-1">
      <div class="home-content">Pengiriman buku</div>
    </div>
    <div class="block-2">
      <div class="home-content">Pembelajaran dengan buku di kelas</div>
    </div>
    <div class="block-3">
      <div class="home-content">Membaca menjangkau dunia yang tidak bisa kita pijaki</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Abril+Fatface");

.home-content {
  position: sticky;
  /* position: -webkit-sticky; */
  top: 30px;
  font: 90px "Abril Fatface", sans-serif;
  color: #fff;
  text-align: center;
}
.block-1,
.block-3 {
  height: 900px;
  padding: 70px 20px;
  background-size: cover;
  background-image: url("../../../public/img/banner/0f4660d8-7e02-4a6f-8918-521443aede1e_169.jpeg");
  box-sizing: border-box;
  background-position: center;
}
.block-2 {
  background: url("../../../public/img/banner/4ffca8b7-871f-4a7a-a00f-e05a80d1bc59.jpeg") no-repeat fixed;
  background-size: cover;
  height: 900px;
  background-position: center;
}
.block-3 {
  background-image: url("../../../public/img/banner/58409649_335037883878716_1499078727872709424_n.jpg");
}
</style>