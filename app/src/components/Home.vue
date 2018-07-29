<template>
  <div class="home">

    <section class="home__info">
      <h1>{{ title }}</h1>
      <h2>{{description}}</h2>
    </section>



  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Clinica Veterinaria',
      description: 'Controllo degli animali'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

$break-small: 320px;
$break-large: 1024px;

.home {

  h1, h2 {
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }

  &__info {
    height: 60px;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1 {
      color:  #ffffff;
      font-size: 35.79px;/* Approssimazione dovuta alla sostituzione dei font */
      font-weight: 100;
      text-align: center;
      margin:0px;
    }
    h2 {
      color:  #ffffff;
      font-size: 14.79px;/* Approssimazione dovuta alla sostituzione dei font */
      font-weight: 100;
      text-align: center;
      margin:0px;
    }

  }

}

 @media screen and (min-width: $break-large) {



 }

</style>
