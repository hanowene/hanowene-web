<template>
  <div>
    <!-- <nav id="nav">
      <h1>WEB'S</h1>
      <ul>
        <li class="active"><a href="#section1">menu1</a></li>
        <li><a href="#section2">menu2</a></li>
        <li><a href="#section3">menu3</a></li>
        <li><a href="#section4">menu4</a></li>
        <li><a href="#section5">menu5</a></li>
        <li><a href="#section6">menu6</a></li>
      </ul>
    </nav> -->

    <div id="contents">
      <home-component id="section1" class="sections"/>
      <what-we-do id="section2" class="sections"/>
      <inspire id="section3" class="sections"/>
      <partnership id="section4" class="sections"/>
      <about-us id="section5" class="sections"/>
      <where-we id="section6" class="sections"/>
      <join-us id="section7" class="sections"/>
      <!-- <div id="section1">We love What You do.</div> -->
      <!-- <div id="section2" class="sections">Make hay while the sun shines</div> -->
      <!-- <div id="section3" class="sections">All in my dream</div> -->
      <!-- <div id="section4" class="sections">Be Strict With Myself</div> -->
      <!-- <div id="section5" class="sections">Can't Stop to Dream</div> -->
      <!-- <div id="section6" class="sections">No Pains No Gain</div> -->
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
  import $ from 'jquery'
  import JQuery from 'jquery'
  // @ is an alias to /src
  import HomeComponent from '@/components/HomeComponent'
  import Partnership from '@/views/partnership/Partnership'
  import AboutUs from '@/views/about/About'
  import WhereWe from '@/views/about/WhereWe'
  import JoinUs from '@/views/involve/JoinTeam'
  import WhatWeDo from '@/views/project/WhatWeDo'
  import Inspire from '@/views/about/Inspire'
  // import Footer from '@/components/footer/Footer'

export default {
  name: "home",
  components: {
    HomeComponent,
    Partnership,
    AboutUs,
    WhereWe,
    JoinUs,
    WhatWeDo,
    Inspire
    // Footer
  },
  mounted () {
    var nav = $("#nav ul li");
    var contents = $("#contents > div");

    // nav.click(function(e){
    //   e.preventDefault();
    //   var target = $(this);
    //   var index = target.index();
    //   //alert(index);
    //   var section = contents.eq(index);
    //   var offset = section.offset().top;
    //   //alert(offset);
    //   $(".offset_top").text(offset);
      
    //   $("html,body").animate({scrollTop:offset},600,"easeInOutExpo");
    // });


    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      
      $(".scroll_top").text(wScroll);
      
      if(wScroll >= contents.eq(0).offset().top){
        nav.removeClass("active");
        nav.eq(0).addClass("active");
      }
      if(wScroll >= contents.eq(1).offset().top){
        nav.removeClass("active");
        nav.eq(1).addClass("active");
      }
      if(wScroll >= contents.eq(2).offset().top){
        nav.removeClass("active");
        nav.eq(2).addClass("active");
      }
      if(wScroll >= contents.eq(3).offset().top){
        nav.removeClass("active");
        nav.eq(3).addClass("active");
      }
      if(wScroll >= contents.eq(4).offset().top){
        nav.removeClass("active");
        nav.eq(4).addClass("active");
      }
      if(wScroll >= contents.eq(5).offset().top){
        nav.removeClass("active");
        nav.eq(5).addClass("active");
      }
      // if(wScroll >= contents.eq(6).offset().top){
      //   nav.removeClass("active");
      //   nav.eq(6).addClass("active");
      // }
      
    });
  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900');
  /* font-family: 'Playfair Display', serif; */

  /* #nav {overflow:hidden; position:fixed; left:0; top:0; width: 100%; background-color: rgba(255,255,255,0.6);}
  #nav h1 {float:left; color: #fff; font-size:40px; padding:12px 5px 5px 20px; font-weight:900;	}
  #nav ul {float:right;}
  #nav ul li {display: inline;}
  #nav ul li a {padding: 20px 10px; text-decoration: none; color: #fff; display:inline-block;}
  #nav ul li.active a {color:#918288; border-bottom: 3px solid #ad1457;} */

  /* #contents {text-align: center; font-size: 50px; color:#fff; font-weight:100; font-family: 'Playfair Display', serif;} */
  /* #contents > div {height: 100vh; line-height: 100vh;} */
  #section1 {background-color: #42a5f5;}
  /* #section2 {background-color: #4db6ac;} */
  #section3 {background-color: #42a5f5;}
  /* #section4 {background-color: #4fc3f7;} */
  #section5 {background-color: #42a5f5;}
  /* #section6 {background-color: #7cb342;} */
  #section7 {background-color: #42a5f5;}
  .sections {
    padding: 150px; 
    /* height: 100vh; */
  }
</style>