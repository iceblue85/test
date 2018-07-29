<template>

  <div id="app" :class="changeMain">
    <header>
      <img src="./assets/logo.svg" alt="Clinica veterinaria" class="header__logo">

      <span class="header__menu">
        {{header}}
      </span>
    </header>
    <main>

    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
      </transition>
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
      changeMain: 'Home',
      header: 'Support',
      footer: '® Clinica Veterinaria'
    }
  },
  watch: {
    $route (to, from) {
      console.log('cosa restituisci: ', to, from)

      if (to.name === 'Home') {
        this.changeMain = 'Home'
      } else if (to.name === 'Section') {
        if (to.params.filter === 'visitati') {
          this.changeMain = 'Section InVisita'
        } else {
          this.changeMain = 'Section InVisita'
        }
      } else if (to.name === 'Detail') {
        this.changeMain = 'Detail'
      } else {
        this.changeMain = 'Home'
      }
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
 * {
   box-sizing: border-box;
 }
}

#app {
 font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url('assets/bg-header.png');
  background-repeat: no-repeat;
  background-position: left top;
  min-height: 100vh;
  &.Section.InVisita {
  background-image: url('assets/bg-section.png');
    background-position: center top;
  }
  &.Detail {
  background-image: url('assets/bg-simple.png');
    background-position: center top;
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
main {
  text-align: center;
  margin-top: 40px;
  padding-bottom: 100px;
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

   #app {
    background-position: center -200px;
    background-size: 100% 700px;
   }

 }

</style>
