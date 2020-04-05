<template>
    <nav id="nav">
      <h1>WEB'S</h1>
      <ul>
        <li class="active"><a href="#section1">menu1</a></li>
        <li><a href="#section2">menu2</a></li>
        <li><a href="#section3">menu3</a></li>
        <li><a href="#section4">menu4</a></li>
        <li><a href="#section5">menu5</a></li>
        <li><a href="#section6">menu6</a></li>
      </ul>
    </nav>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900');
  /* font-family: 'Playfair Display', serif; */

  #nav {overflow:hidden; position:fixed; left:0; top:0; width: 100%; background-color: rgba(255,255,255,0.6); z-index: 1;}
  #nav h1 {float:left; color: #fff; font-size:40px; padding:12px 5px 5px 20px; font-weight:900;	}
  #nav ul {float:right;}
  #nav ul li {display: inline;}
  #nav ul li a {padding: 20px 10px; text-decoration: none; color: #fff; display:inline-block;}
  #nav ul li.active a {color:#ad1457; border-bottom: 3px solid #ad1457;}

  #contents {text-align: center; font-size: 50px; color:#fff; font-weight:100; font-family: 'Playfair Display', serif;}
  #contents > div {height: 100vh; line-height: 100vh;}
  #section1 {background-color: #42a5f5;}
  #section2 {background-color: #4db6ac;}
  #section3 {background-color: #4dd0e1;}
  #section4 {background-color: #4fc3f7;}
  #section5 {background-color: #c0ca33;}
  #section6 {background-color: #7cb342;}
</style>