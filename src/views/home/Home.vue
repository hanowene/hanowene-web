<template>
  <div class="container home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- <div class="block-1">
      <div class="home-content">Pengiriman buku</div>
    </div>
    <div class="block-2">
      <div class="home-content">Pembelajaran dengan buku di kelas</div>
    </div>
    <div class="block-3">
      <div class="home-content">Membaca menjangkau dunia yang tidak bisa kita pijaki</div>
    </div> -->

    <!-- Slider 1 -->
    <div class="slider" id="slider3">
        <div style="background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/jungle.jpg)">
            <span>
          <h2>I'm a title for Slide #1</h2>
      </span>
        </div>
        <div style="background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1200_110627-8240-Myst.jpg)">
            <span>
          <h2>I'm a title for Slide #2</h2>
      </span>
        </div>
        <div style="background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1200_bodie-11.jpg)">
            <span>
          <h2>I'm a title for Slide #3</h2>
      </span>
        </div>
        <!-- The Arrows -->
        <i class="left arrows" style="z-index:2; position:absolute;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></i>
        <i class="right arrows" style="z-index:2; position:absolute;">
      <svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180) "></path></svg></i>
        <!-- Title Bar -->
        <!--     <span class="titleBar">
        <h1>I am like a leaf in the wind.</h1> 
        <p>Watch me soar!</p>
    </span> -->
    </div>
  </div>
</template>

<script>
// /* user defined variables */
// var timeOnSlide = 3, 		
//     // the time each image will remain static on the screen, measured in seconds
// timeBetweenSlides = 1, 	
//     // the time taken to transition between images, measured in seconds

// // test if the browser supports animation, and if it needs a vendor prefix to do so
//     animationstring = 'animation',
//     animation = false,
//     keyframeprefix = '',
//     domPrefixes = 'Webkit Moz O Khtml'.split(' '), 
//     // array of possible vendor prefixes
//     pfx  = '',
//     slidy = document.getElementById("slidy"); 
// if (slidy.style.animationName !== undefined) { animation = true; } 
// // browser supports keyframe animation w/o prefixes

// if( animation === false ) {
//   for( var i = 0; i < domPrefixes.length; i++ ) {
//     if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
//       pfx = domPrefixes[ i ];
//       animationstring = pfx + 'Animation';
//       keyframeprefix = '-' + pfx.toLowerCase() + '-';
//       animation = true;
//       break;
//     }
//   }
// }

// if( animation === false ) {
//   // animate in JavaScript fallback
// } else {
//   var images = slidy.getElementsByTagName("img"),
//       firstImg = images[0], 
//       // get the first image inside the "slidy" element.
//       imgWrap = firstImg.cloneNode(false);  // copy it.
//   slidy.appendChild(imgWrap); // add the clone to the end of the images
//   var imgCount = images.length, // count the number of images in the slide, including the new cloned element
//       totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
//       slideRatio = (timeOnSlide / totalTime)*100, // determine the percentage of time an induvidual image is held static during the animation
//       moveRatio = (timeBetweenSlides / totalTime)*100, // determine the percentage of time for an individual movement
//       basePercentage = 100/imgCount, // work out how wide each image should be in the slidy, as a percentage.
//       position = 0, // set the initial position of the slidy element
//       css = document.createElement("style"); // start marking a new style sheet
//   css.type = "text/css";
//   css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the slidy container
//   css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
//   css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n"; 
//   for (i=0;i<(imgCount-1); i++) { // 
//     position+= slideRatio; // make the keyframe the position of the image
//     css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
//     position += moveRatio; // make the postion for the _next_ slide
//     css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
// }
//   css.innerHTML += "}\n";
//   css.innerHTML += "#slidy { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n"; // call on the completed keyframe animation sequence
// document.body.appendChild(css); // add the new stylesheet to the end of the document
// }

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

@import url("https://fonts.googleapis.com/css?family=Abril+Fatface");

.home {
  margin-top: 10px;
  margin-bottom: 10px;
}
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

.slider, 
.slider > div {
    /* Images default to Center Center. Maybe try 'center top'? */
    background-position: center center;
    display: block;
    width: 100%;
    height: 500px;
    /* height: 100vh; *//* If you want fullscreen */
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #000;
    overflow: hidden;
    -moz-transition: transform .4s;
    -o-transition: transform .4s;
    -webkit-transition: transform .4s;
    transition: transform .4s;
}

.slider > div {
    position: absolute;
}

.slider > i {
    color: #5bbd72;
    position: absolute;
    font-size: 60px;
    margin: 20px;
    top: 40%;
    text-shadow: 0 10px 2px #223422;
    transition: .3s;
    width: 30px;
    padding: 10px 13px;
    background: #fff;
    background: rgba(255, 255, 255, .3);
    cursor: pointer;
    line-height: 0;
    box-sizing: content-box;
    border-radius: 3px;
    z-index: 4;
}

.slider > i svg {
    margin-top: 3px;
}

.slider > .left {
    left: -100px;
}
.slider > .right {
    right: -100px;
}
.slider:hover > .left {
    left: 0;
}
.slider:hover > .right {
    right: 0;
}

.slider > i:hover {
    background:#fff;
    background: rgba(255, 255, 255, .8);
    transform: translateX(-2px);
}

.slider > i.right:hover {
    transform: translateX(2px);
}

.slider > i.right:active,
.slider > i.left:active {
    transform: translateY(1px);
}

.slider:hover > div {
    transform: scale(1.01);
}

.hoverZoomOff:hover > div {
    transform: scale(1);
}

.slider > ul {
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 4;
    padding: 0;
    margin: 0;
    transform: translateX(-50%);
}

.slider > ul > li {
    padding: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    list-style: none;
    float: left;
    margin: 10px 10px 0;
    cursor: pointer;
    border: 1px solid #fff;
    -moz-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s;
    transition: .3s;
}

.slider > ul > .showli {
    background-color: #7EC03D;
    -moz-animation: boing .5s forwards;
    -o-animation: boing .5s forwards;
    -webkit-animation: boing .5s forwards;
    animation: boing .5s forwards;
}

.slider > ul > li:hover {
    background-color: #7EC03D;
}

.slider > .show {
    z-index: 1;
}

.hideDots > ul {
    display: none;
}

.showArrows > .left {
    left: 0;
}

.showArrows > .right {
    right: 0;
}

.titleBar {
    z-index: 2;
    display: inline-block;
    background: rgba(0,0,0,.5);
    position: absolute;
    width: 100%;
    bottom: 0;
    transform: translateY(100%);
    padding: 20px 30px;
    transition: .3s;
    color: #fff;
}

.titleBar * {
    transform: translate(-20px, 30px);
    transition: all 700ms cubic-bezier(0.37, 0.31, 0.2, 0.85) 200ms;
    opacity: 0;
}

.titleBarTop .titleBar * {
    transform: translate(-20px, -30px);
}

.slider:hover .titleBar,
.slider:hover .titleBar * {
    transform: translate(0);
    opacity: 1;
}

.titleBarTop .titleBar {
    top: 0;
    bottom: initial;
    transform: translateY(-100%);
}

.slider > div span {
    display: block;
    background: rgba(0,0,0,.5);
    position: absolute;
    bottom: 0;
    color: #fff;
    text-align: center;
    padding: 0;
    width: 100%;
}


@keyframes boing {
    0% {
        transform: scale(1.2);
    }
    40% {
        transform: scale(.6);
    }
    60% {
        transform: scale(1.2);
    }
    80% {
        transform: scale(.8);
    }
    100% {
        transform: scale(1);
    }
}

/* -------------------------------------- */

#slider2 {
    max-width: 30%;
    margin-right: 20px;
}

.row2Wrap {
    display: flex;
}

.content {
    padding: 50px;
    margin-bottom: 100px;
}

html {
    height: 100%;
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}
h1, h2, h3 {
    font-family: 'Crimson Text', sans-serif;
    font-weight: 100;
}
body {
    font: 15px 'Titillium Web', Arial, sans-serif;
    background: radial-gradient(#121212, #000);
    height: 100%;
    color: #aaa;
    margin: 0;
    padding: 0;
}

.content {
    padding: 10px 15vw;
}

</style>