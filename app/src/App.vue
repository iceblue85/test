<template>
  <div id="app">
    <header>
      <img src="./assets/logo.svg" alt="Vue.js PWA" class="header__logo">

      <span class="header__menu">
        {{header}}
      </span>
    </header>
    <main>


      <router-view></router-view>
    </main>

    <footer>
      <span>{{footer}}</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      header: 'Support',
      footer: '® Clinica Veterinaria'
    }
  }
}
</script>

<style lang="scss">

$break-small: 320px;
$break-large: 1024px;

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-image: url('assets/bg-header.svg');
  background-repeat: no-repeat;
  background-position: left top;

}

#app {
 font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 17px 14px 0 14px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header__logo {

  }
  .header__menu {
    color:  #ffffff;
    font-size: 12.79px;/* Approssimazione dovuta alla sostituzione dei font */
    font-weight: bold;
    text-align: right;
  }
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

footer {
background-color:  #f5f9fc;
width: 100%;
height: 65px;
display: flex;
align-items: center;
justify-content: center;
color:  #35495E;
font-size: 9.79px;/* Approssimazione dovuta alla sostituzione dei font */
font-weight: 100;
text-align: center;
position: fixed;
bottom: 0px;
left: 0px;
}

 @media screen and (min-width: $break-large) {



 }

</style>
