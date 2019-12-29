<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button
        class="navbar-toggler"
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
        <div class="container">
          <ul class="navbar-nav mx-auto justify-content-center">
            <!-- <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
            </li>-->
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/">Home</router-link>
              </a>
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
              >Tentang Kami</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/backgroundStory">
                  <a class="dropdown-item" href="#">Latar Belakang</a>
                </router-link>
                <router-link to="/visionMission">
                  <a class="dropdown-item" href="#">Visi & Misi</a>
                </router-link>
                <router-link to="/ourTeam">
                  <a class="dropdown-item" href="#">Tim Kami</a>
                </router-link>
                <!-- <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>-->
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
              >Projek Kami</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/library">
                  <a class="dropdown-item" href="#">Perpustakaan</a>
                </router-link>
                <!-- <a class="dropdown-item" href="#">Tim Kami</a> -->
                <!-- <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>-->
              </div>
            </li>
            <li class="nav-item dropdown">
              <!-- <router-link to="/involved"> -->
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Ikut Terlibat</a>
              <!-- </router-link> -->
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/buildLibrary">
                  <a class="dropdown-item" id="block-1" href="#">Ajukan Pendirian Perpustakaan</a>
                </router-link>

                <router-link to="/joinTeam">
                  <a class="dropdown-item" href="#">Daftar Menjadi Tim</a>
                </router-link>

                <!-- <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>-->
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
              >Donasi</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/bookDonation">
                  <a class="dropdown-item" href="#">Buku</a>
                </router-link>
                <router-link to="/EnergyAssistance">
                  <a class="dropdown-item" href="#">Tenaga</a>
                </router-link>
                <router-link to="/fundDonation">
                  <a class="dropdown-item" href="#">Dana</a>
                </router-link>
                <!-- <a class="dropdown-item" href="#">Tim Kami</a> -->
                <!-- <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>-->
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/ourContact">
                <a class="nav-link" href="#">Kontak Kami</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/faq">
                <a class="nav-link" href="#">FAQ</a>
              </router-link>
            </li>
            <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
            </li>-->
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>-->
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.navbar {
  background-color:rgb(135, 141, 136);
  color:aliceblue;
}

.home-content {
  position: sticky;
  /* position: -webkit-sticky; */
  top: 30px;
  font: 90px "Abril Fatface", sans-serif;
  color: #fff;
  text-align: center;
}

.nav-item {
  margin-right: 20px;
  margin-left: 20px;
}

.navbar-nav {
  text-align: center;
}

a[id="block-1"]:target ~ .block-1 {
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
}
</style>