<template>
  <div class="what-we-do">
    <div class="we-do-title">
      Yang Kami Kerjakan
    </div>
    <div class="project-section">
      <div class="button" id="button-3">
        <div id="circle"></div>
        <router-link to="/library">
          <a href="#" @click="this.handleInPage">
            Perpustakaan
          </a>
        </router-link>
      </div>
      <div class="button" id="button-3">
        <div id="circle"></div>
        <router-link to="/electric-project">
          <a href="#" @click="this.handleInPage">
            Listrik
          </a>
        </router-link>
      </div>
      <div class="button" id="button-3">
        <div id="circle"></div>
        <router-link to="/education-project">
          <a href="#" @click="this.handleInPage">
            Wisata Edukasi
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
  .we-do-title {
    font-size: xx-large;
    margin-bottom: 50px;
  }
  .project-section {
    width: 100%;
    margin: 0 auto;
    /* padding: 50px 0 150px 0; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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
  }

  a {
    color: rgb(30, 31, 31);
    text-decoration: none;
    letter-spacing: 1px;
  }

  #button-3 {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  #button-3 a {
    position: relative;
    transition: all .45s ease-Out;
  }

  #circle {
    width: 0%;
    height: 0%;
    opacity: 0;
    line-height: 40px;
    border-radius: 50%;
    background: #BFC0C0;
    position: absolute;
    transition: all .5s ease-Out;
    top: 20px;
    left: 70px;
  }

  #button-3:hover #circle {
    width: 200%;
    height: 500%;
    opacity: 1;
    top: -70px;
    left: -70px;
  }

  #button-3:hover a {
    color: #2D3142;
  }
</style>