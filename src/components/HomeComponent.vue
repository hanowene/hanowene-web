<template>
  <div class="vision">
    <div class="resp-container">
      <iframe class="resp-iframe" src="https://www.youtube.com/embed/_M8Iv-HIoIs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <br/>
    <a class="motto">
      Membangun pelosok Indonesia agar menjadi bagian dari sumber peradaban bagi keluarga mereka sendiri, masyarakat, dan bangsa Indonesia.
    </a>
    <div>
      <div href="" class="button" id="button-5">
        <div id="translate"></div>
        <router-link to="/blog" @click="this.handleInPage">
          <a href="">
            Blog kami
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleInPage() {
      this.$store.commit('changeInPage')
    }
  }
}
</script>

<style scoped>
.resp-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}
.resp-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.motto {
  font-family: Andale Mono, monospace;
  font-size: x-large;
  font-weight: bold;
}

.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid rgb(40, 41, 41);
  margin: 20px 20px 20px 20px;
  color: rgb(33, 34, 34);
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: khaki;

  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #888888;
}

a {
  color: rgb(30, 31, 31);
  text-decoration: none;
  letter-spacing: 1px;
}

.blog-button {
  margin-top: 30px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  box-shadow: ivory;
  border: 1px solid;
}


#button-5 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-5 a {
  position: relative;
  transition: all .45s ease-Out;
}

#translate {
  transform: rotate(50deg);
  width: 100%;
  height: 250%;
  left: -200px;
  top: -30px;
  background: rgb(134, 133, 133);
  position: absolute;
  transition: all .3s ease-Out;
}

#button-5:hover #translate {
  left: 0;
}

#button-5:hover a {
  color: rgb(22, 22, 22);
}


</style>