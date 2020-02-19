<template>
  <div class="view-navbar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button
        class="navbar-toggler float-xs-right ml-auto hidden-sm-up"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="">
          <ul class="navbar-nav mr-auto justify-content-center">
            <li class="nav-item">
              <router-link to="/">
                <img class="headerImg" src="https://hanowene.files.wordpress.com/2018/10/cropped-hanowene_logo-11.png" alt="">
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link" href="#">
                  HOME
                </a>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >TENTANG KAMI</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/backgroundStory">
                  <a class="dropdown-item" href="#">LATAR BELAKANG</a>
                </router-link>
                <router-link to="/visionMission">
                  <a class="dropdown-item" href="#">VISI & MISI</a>
                </router-link>
                <router-link to="/ourTeam">
                  <a class="dropdown-item" href="#">TIM KAMI</a>
                </router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >PROGRAM KAMI</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/library">
                  <a class="dropdown-item" href="#">PERPUSTAKAAN</a>
                </router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >IKUT TERLIBAT</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/buildLibrary">
                  <a class="dropdown-item" id="block-1" href="#">AJUKAN PENDIRIAN PERPUSATAKAAN</a>
                </router-link>

                <router-link to="/joinTeam">
                  <a class="dropdown-item" href="#">DAFTAR MENJADI TIM KAMI</a>
                </router-link>

              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >DONASI</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/bookDonation">
                  <a class="dropdown-item" href="#">BUKU</a>
                </router-link>
                <router-link to="/EnergyAssistance">
                  <a class="dropdown-item" href="#">TENAGA</a>
                </router-link>
                <router-link to="/fundDonation">
                  <a class="dropdown-item" href="#">DANA</a>
                </router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/ourContact">
                <a class="nav-link" href="#">KONTAK KAMI</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/faq">
                <a class="nav-link" href="#">FAQ</a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
@media (width: 480px) {
  .view-navbar {
    /* position: -webkit-sticky; */
    position: relative;
    top: 0;
    z-index: 0;
  }
}

.view-navbar {
  position: -webkit-sticky;
  position: relative;
  /* position: sticky; */
  top: 0;
  z-index: 1;
}

.headerImg {
  max-height: 40px;
  max-width: 181.56px;
  margin: 5px 5px 5px 5px;
}

.navbar {
  background-color:rgb(245, 192, 48);
  opacity: 0.9;
  padding: 1px 5rem 1px 5rem;
}

.home-content {
  position: sticky;
  /* position: -webkit-sticky; */
  top: 30px;
  font: 90px "Abril Fatface", sans-serif;
  text-align: center;
}

.nav-item {
  margin: 10px 20px 10px 20px;
  font-family: Gyre Schola, serif;
  font-weight: bold;
  color: black;
}

.nav-item:hover {
  transform: scale(1.2); 
}

.dropdown:hover>.dropdown-menu {
  display: block;
}

.dropdown-item {
  font-size: 80%;
}

/* .navbar-nav {
  text-align: center;
  max-height: 60px;
} */

/* a[id="block-1"]:target ~ .block-1 {
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
}

a[id="block-2"]:target ~ #main article.article {
  -webkit-transform: translateY(-500px);
  transform: translateY(-500px);
}
a[id="block-3"]:target ~ #main article.article {
  -webkit-transform: translateY(-1000px);
  transform: translateY(-1000px);
} */
</style>