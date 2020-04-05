<template>
  <div class="container home">
    <div class="justify-content-center donation">
      <div class="donation-title eightbit-title">
        Donasi
      </div>
      <div class="eightbit-content">
        Ayo ikut donasi buku untuk perpustakaan di desa Tangma, Kabupaten Yahukimo - Papua. Untuk donasi buku klik "DONASI" dibawah ini :
      </div>
      <button class="button-donation btn">
        <a href=""><span>DONASI</span></a>
      </button>
    </div>
    <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <img class="banner-item" src="../../assets/banner/eb79ca84-2ca0-464e-933f-064962d4037f_169.jpeg" alt="Los Angeles">
              <!-- <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
              </div> -->
              <div class="banner-content">
                <div class="title-content">
                  Here is the content 1
                </div>
                <div class="body-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula rutrum facilisis. Praesent eu dolor in lacus viverra posuere. Phasellus non scelerisque justo. Phasellus vitae elit quam. Phasellus sit amet ipsum maximus, suscipit tortor sit amet, volutpat lacus. Praesent pharetra porta nisl. Pellentesque ultrices placerat leo vel faucibus.
                </div>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <img class="banner-item" src="../../assets/banner/4ffca8b7-871f-4a7a-a00f-e05a80d1bc59.jpeg" alt="Chicago">
              <div class="banner-content">
                <div class="title-content">
                  Here is the content 2
                </div>
                <div class="body-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula rutrum facilisis. Praesent eu dolor in lacus viverra posuere. Phasellus non scelerisque justo. Phasellus vitae elit quam. Phasellus sit amet ipsum maximus, suscipit tortor sit amet, volutpat lacus. Praesent pharetra porta nisl. Pellentesque ultrices placerat leo vel faucibus.
                </div>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <img class="banner-item" src="../../assets/banner/ae5d8caf-fbf7-4d46-8e1b-5847c6968339.jpeg" alt="New York">
              <div class="banner-content">
                <div class="title-content">
                  Here is the content 3
                </div>
                <div class="body-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula rutrum facilisis. Praesent eu dolor in lacus viverra posuere. Phasellus non scelerisque justo. Phasellus vitae elit quam. Phasellus sit amet ipsum maximus, suscipit tortor sit amet, volutpat lacus. Praesent pharetra porta nisl. Pellentesque ultrices placerat leo vel faucibus.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-arrow">
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
          </a>
        </div>
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

<style scoped>
  .carousel-inner img {
    width: 100%;
    height: 100%;
  }
  .carousel {
    padding: 20px 0px 20px 0px;
  }

  .home {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .donation-title {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 22px;
    font-size-adjust: inherit;
  }

  .donation {
    margin: 0px 300px 0px 300px;
    border-style: solid;
    border-color: black;
  }

  .eightbit-title {
   font-family: '8BITWONDERNominal';
   font-size: 15px;
   /* font-weight: normal;
   font-style: normal; */
  }

  .eightbit-content {
   /* font-family: '8BITWONDERNominal'; */
   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   /* font-size: 20px; */
   /* font-weight: lighter; */
   /* font-style: italic; */
  }

  .button-donation {
    margin-bottom: 10px;
  }
  
  .button.green {
    background: #cae285;
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#cae285), to(#a3cd5a));
    background: -moz-linear-gradient(#cae285, #a3cd5a);
    background: linear-gradient(#cae285, #a3cd5a);
    border: solid 1px #aad063;
    border-bottom: solid 3px #799545;
    box-shadow: inset 0 0 0 1px #e0eeb6;
    /* color: #5d7731; */
    text-shadow: 0 1px 0 #d0e5a4; }
    
  .button.green:hover {
    background: #abd164;
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#abd164), to(#b9d972));
    background: -moz-linear-gradient(#abd164, #b9d972);
    background: linear-gradient(#abd164, #b9d972);
    border: solid 1px #98b85b;
    border-bottom: solid 3px #799545;
    box-shadow: inset 0 0 0 1px #cce3a1; }
    
  .button.green:active {
    background: #a4cb5d;
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#a4cb5d), to(#9ec45a));
    background: -moz-linear-gradient(#a4cb5d, #9ec45a);
    background: linear-gradient(#a4cb5d, #9ec45a);
    border: solid 1px #6e883f;
    box-shadow: inset 0 10px 15px 0 #90b352; }
    
  
  .btn {
    text-transform: uppercase;
    font-weight: bold;
    line-height: 92px;
    color: #fff;
    /* background-color: gray; */
  }
  .btn span,
  .btn:before,
  .btn:after {
    float: left;
  }
  .btn span {
    background: url('https://confnu-production.s3.amazonaws.com/conference_editions/8/images/13/image/repeating-sprite.png') 0 0 repeat-x;
    padding: 0 14px;
  }
  .btn:before,
  .btn:after {
    content: '';
    height: 92px;
    width: 14px;
    background: url('https://confnu-production.s3.amazonaws.com/conference_editions/8/images/16/image/sprite.png') 0 0 no-repeat;
  }
  .btn:after { background-position: -14px 0; }

  /* Primary button hover state */
  .btn:hover span { background-position: 0 -92px; }
  .btn:hover:before { background-position: -28px 0; }
  .btn:hover:after { background-position: -42px 0; }


  /* Secondary button */
  .btn-secondary span{ background-position: 0 -184px; }
  .btn-secondary:before { background-position: 0 -92px; }
  .btn-secondary:after { background-position: -14px -92px; }

  /* Primary button hover state */
  .btn-secondary:hover span { background-position: 0 -276px; }
  .btn-secondary:hover:before { background-position: -28px -92px; }
  .btn-secondary:hover:after { background-position: -42px -92px; }

  /* .carousel-slide {
    border-style: solid;
  } */

  .carousel-item {
    text-align: left;
    /* justify-content: space-between; */
  }

  .banner-item {
    max-width: 600px;
    max-height: 500px;
  }

  .banner-content {
    margin-left: 30px;
    max-width: 500px;
  }

  .title-content {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .body-content {

  }

  .carousel-arrow {

  }

  .carousel-control-prev {
    max-width: 15px;
    /* text-align: left; */
    padding: 360px 200px 0px 10px;
  }

  .carousel-control-next {
    max-width: 15px;
    /* text-align: right; */
    padding: 360px 535px 0px 200px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    /* height: 100px;
    width: 100px; */
    /* outline: black;
    background-size: 100%, 100%;
    border-radius: 50%;
    border: 1px solid black;
    background-image: none; */
    /* content: '>';
    font-size: 30px;
    color: red; */
    background-image: none;
    /* background-color: black; */
  }

  .carousel-control-next-icon:after {
    content: '>';
    font-size: 30px;
    font-weight: bold;
    color: red;
  }

  .carousel-control-prev-icon:after {
    content: '<';
    font-size: 30px;
    font-weight: bold;
    color: red;
  }
</style>