<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div class="about-title">
      Tentang Kami
    </div>
    <div href="" class="button" id="button-5">
        <div id="translate"></div>
        <router-link to="/our-team">
          <a href="">
            Tim Kami
          </a>
        </router-link>
      </div>
    <!-- <div>
      <router-link to="/our-team">
        <a href="#" @click="this.handleInPage">
          Tim Kami
        </a>
      </router-link>
    </div> -->
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
  .about-title {
    font-size: xx-large;
    margin-bottom: 50px;
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