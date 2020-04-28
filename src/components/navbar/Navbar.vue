<template>
  <!-- <div> -->
    <nav id="nav">
      <!-- <h1 class="active"><a href="#section1">WEB'S</a></h1> -->
      <div v-if="this.$store.state.inPage">
        <router-link to="/"  @click="this.handleInPage">
          <img class="headerImg active" src="https://hanowene.files.wordpress.com/2018/10/cropped-hanowene_logo-11.png" alt="">
        </router-link>
        <ul>
          <li>
            <router-link to="/">
              <a @click="this.handleInPage">What We do</a>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <a @click="this.handleInPage">Aspire to Inspire</a>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <a @click="this.handleInPage">Partnership</a>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <a @click="this.handleInPage">About Us</a>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <a @click="this.handleInPage">Where We Are</a>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <a @click="this.handleInPage">Join Us</a>
            </router-link>
          </li>
        </ul>
      </div>
      <div v-else>
        <a href="#section1">
          <img class="headerImg active" src="https://hanowene.files.wordpress.com/2018/10/cropped-hanowene_logo-11.png" alt="">
        </a>
        <ul>
          <li>
            <a href="#section2">What We do</a>
          </li>
          <li><a href="#section3">Aspire to Inspire</a></li>
          <li><a href="#section4">Partnership</a></li>
          <li><a href="#section5">About Us</a></li>
          <li><a href="#section6">Where We Are</a></li>
          <li><a href="#section7">Join Us</a></li>
        </ul>
      </div>
    </nav>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      inPage: ''
    }
  },
  created() {
    this.getStore()
  },
  methods: {
    getStore() {
      this.inPage = this.$store.state.inPage
    },
    handleInPage() {
      this.$store.commit('changeInPage')
    }
  },
  computed: {
    gettingPge: function() {
      return this.inPage
    }
  },
  // mounted() {
  //   console.log(`mounted`, this.inPage);
  // }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900');
  /* font-family: 'Playfair Display', serif; */

  #nav {overflow:hidden; position:fixed; left:0; top:0; width: 100%; background-color: rgba(7, 7, 7, 0.6); z-index: 1;}
  #nav h1 {float:left; color: #fff; font-size:40px; padding:12px 5px 5px 20px; font-weight:900;	}
  #nav ul {float:right;}
  #nav ul li {display: inline;}
  #nav ul li a {padding: 20px 10px; text-decoration: none; color: #fff; display:inline-block;}
  #nav ul li.active a {color:#ad1457; border-bottom: 3px solid #ad1457;}
  
  .headerImg {
    max-height: 80px;
    max-width: 363.12px;
    /* margin: 5px 5px 5px 5px; */
  }
</style>