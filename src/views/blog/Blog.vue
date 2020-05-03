<template>
  <div class="blog landingPage container">
   <h1>BLOG</h1>
    <div class = "row row-custom">
      <div class = "col-sm-12 col-md-6 col-lg-4 post-column live-music">
        <img class="post-column image" src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="">
        <div class="meta-data">
          <p class="meta-data date-category">3rd January 2020   |   Live Music</p>
          <h3 class="meta-data__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p class="meta-data__author">Adam Martin</p>
        </div>
      </div>

      <div class = "col-sm-12 col-md-6 col-lg-4 post-column playing-music">
        <img class="post-column image" src="https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="meta-data">
          <p class="meta-data date-category">20th December 2019   |   Playing Music</p>
          <h3 class="meta-data title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p class="meta-data__author">Adam Martin</p>
        </div>
      </div>

      <div class = "col-sm-12 col-md-6 col-lg-4 post-column album-reviews">
        <img class="post-column image" src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="meta-data">
          <p class="meta-data date-category">13th December 2019   |   Album Reviews</p>
          <h3 class="meta-data title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p class="meta-data__author">Adam Martin</p>
        </div>
      </div>

      <div class = "col-sm-12 col-md-6 col-lg-4 post-column music-production">
        <img class="post-column image" src="https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="meta-data">
          <p class="meta-data date-category">29th November 2019   |   Music Production</p>
          <h3 class="meta-data title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p class="meta-data__author">Adam Martin</p>
        </div>
      </div>

    </div>

    <div id = "load-more-container">
      <button class = "load-more-button"> Load More </button>
    </div>
  </div>
</template>

<script>
import '@/components/style/newPage/LandingPage.vue'

export default {
  created() {
    this.scrollToTop()
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0); 
    }
  }
}
</script>

<style scoped>
  .blog {
    padding-top: 180px;
  }

  .container-custom {
    padding-left: 30px;
    padding-right: 30px;
  }

  .container-fluid {
    padding-top: 1.5rem;
  }
  .container-fluid .primary-title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .container-fluid .post-column {
    display: none;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .container-fluid .post-column__image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: all 0.5s;
  }
  .container-fluid .post-column__image:hover {
    transform: scale(1.05);
  }
  .container-fluid .meta-data {
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  }
  .container-fluid .meta-data__date-category {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .container-fluid .meta-data__title {
    margin-bottom: 1rem;
  }
  @media (min-width: 1921px) {
    .container-fluid .row-custom {
      margin-left: 10%;
      margin-right: 10%;
    }
  }
  .container-fluid .post-filter-container {
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    .container-fluid .post-filter-container {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (min-width: 1140px) {
    .container-fluid .post-filter-container {
      width: 35%;
    }
  }
  @media (min-width: 1920px) {
    .container-fluid .post-filter-container {
      width: 25%;
    }
  }
  .container-fluid .post-filter-container .secondary-title {
    text-align: left;
    margin-bottom: 1rem;
  }
  .container-fluid .post-filter-container .filter-select-list {
    width: 100%;
    text-align: center;
    text-align-last: center;
    padding: 5px;
    border: 2px solid black;
  }
  .container-fluid #load-more-container {
    display: none;
    text-align: center;
    margin-bottom: 2rem;
  }
  .container-fluid #load-more-container .load-more-button {
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    border-radius: 8px;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }
  .container-fluid #load-more-container .load-more-button:hover {
    opacity: 0.9;
  }

  /* .container-custom {
    padding-left: 30px;
    padding-right: 30px;
  }

  .container-fluid {
    padding-top: 1.5rem;
  }

  .primary-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .post-column {
    display: none;
    margin-bottom: 1rem;
    cursor: pointer;

    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: all 0.5s;
  }

  .post-column:hover {
    transform: scale(1.05);
  }

  .meta-data {
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  }

  .date-category {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .title {
    margin-bottom: 1rem;
  } */
</style>