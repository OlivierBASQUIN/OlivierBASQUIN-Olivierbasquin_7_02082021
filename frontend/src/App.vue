<template>
  <div id="app">
    <router-view/>
    <footer class="support"><a class="supportlink" href="mailto:support@groupomania.fr">Contacter le support technique</a></footer>
  </div>
  
</template>

<style>
html{
  box-sizing: border-box;
}

body{
  margin: 0;
  background-color: rgb(229, 233, 232);
  text-align:center;
}

body, html{
  height:100%;
  }

#app {
  font-family: Arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  box-sizing: border-box;
  min-height:100%;
  margin:0 auto;
  position:relative;
}

a {
  color: inherit;
  text-decoration: none;
}

a.router-link-exact-active {
  color: inherit;
}

.support{
background-color: black;
color: white;
padding: 20px 0px;
position:absolute;
bottom:0;
width: 100%;
text-align: center;
height: 30px;
margin: 0;
}

.supportlink{
margin: 0;
}

.supportlink:hover {
 color: rgb(196, 196, 202);
 text-decoration: underline;
}
</style>
