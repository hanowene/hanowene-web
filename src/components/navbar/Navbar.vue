<template>
  <div>
    <nav id="nav" class="navbar navbar-expand-lg">
      <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"> -->
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <router-link v-if="!isPopupLogo" class="hanowene-logo" to="/"  @click="this.handleInPage">
          <img class="headerImg active" src="https://hanowene.files.wordpress.com/2018/10/cropped-hanowene_logo-11.png" alt="">
        </router-link>
        <button @click="popUpHanoweneLogo()" class="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div> -->
      <!-- </nav> -->
      <!-- <h1 class="active"><a href="#section1">WEB'S</a></h1> -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="this.$store.state.inPage">
        <router-link v-if="isPopupLogo" class="hanowene-logo" to="/"  @click="this.handleInPage">
          <img class="headerImg active" src="https://hanowene.files.wordpress.com/2018/10/cropped-hanowene_logo-11.png" alt="">
        </router-link>
        <ul class="text-right">
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent" v-else>
        <a v-if="isPopupLogo" class="hanowene-logo" href="#section1">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      inPage: '',
      isPopupLogo: true
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
    },
    popUpHanoweneLogo() {
      this.isPopupLogo = !this.isPopupLogo
      console.log(`this.isPopupLogo`, this.isPopupLogo);
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

  .hanowene-logo {
    float:left
  }
</style>