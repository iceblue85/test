<template>
  <div class="home">

    <section class="home__info">
      <h1>{{ title }}</h1>
      <h2>{{description}}</h2>
    </section>

    <section class="home__box">

      <ul>
        <li v-for="item in mainMenu" v-bind:key="item.title">
          <picture>
            <source media="(min-width: 1024px)" :srcset="item.img">
            <img :src="item.img" :alt="item.title">
          </picture>
          <h3>{{item.title}}</h3>
          <!--<a href="#">vedi lista </a> -->
          <router-link :to="{ name: 'Section', params: { filter: item.link } }" >  vedi lista </router-link>
        </li>

      </ul>

    </section>

    <section class="home__additional">

      <ul>
        <li v-for="item in additional" v-bind:key="item.title">
          <h4>{{item.title}}</h4>
          <p>{{item.description}}</p>
        </li>
      </ul>

    </section>


  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Clinica Veterinaria',
      description: 'Controllo degli animali',
      animals: this.$root.$data.animals,
      additional: this.$root.$data.additional,
      mainMenu: [
        {
          img: '../static/img/in-visita.svg',
          title: 'Animali in visita',
          link: 'in-visita'
        },
        {
          img: '../static/img/visitati.svg',
          title: 'Animali visitati',
          link: 'visitati'
        }
      ]
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
  &__box {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 60px 0;
      li {
      border-radius: 5px;
      background-color:  #ffffff;
      min-width: 248px;
      display: flex;
      flex-direction: column;
      width: 75%;
      height: 201px;
      box-shadow: 0px 9px 22.56px 1.44px rgba(0, 0, 0, 0.17);
      overflow: hidden;
        > picture {
            height: 111px;
            overflow: hidden;
          > img {
            width: 100%;
            height: 230%;
            object-fit: cover;
          }
        }
        > h3 {
        color:  #6c6d8c;
        font-size: 27.79px;/* Approssimazione dovuta alla sostituzione dei font */
        font-weight: normal;
        text-align: center;
        }
        > a {
          background-color:  #f5f9fc;
          width: 100%;
          height: 43px;
          display: flex;
          justify-content: center;
          align-items: center;
          color:  #8b97f0;
          font-size: 13.79px;/* Approssimazione dovuta alla sostituzione dei font */
          font-weight: bold;
          text-decoration: none;
        }
        &:not(:last-of-type) {
          margin-bottom:22px;
        }
      }
    }
  }
    &__additional {
      @extend .home__box;
      ul {
        padding: 0px;
        li {
          height: auto;
          background:transparent;
          box-shadow: none;
          border-radius: 0;
          > p {
            margin:0px;
          }
          &:not(:last-of-type) {
            padding-bottom: 20px;
            border-bottom:thin solid #6c6d8c;
          }
        }
      }
    }

}

 @media screen and (min-width: $break-large) {

  .home {

    &__box {
      display: flex;
      justify-content: center;
      ul {
        max-width: 532px;
        flex-direction: row;
        justify-content: center;
        li {
          &:not(:last-of-type) {
          margin-bottom:0px;
          }

        }
      }
    }
    &__additional {
      ul {
        li {
          &:not(:last-of-type) {
            padding-bottom: 0;
            border-bottom:none;
          }
        }
      }

    }


  }

 }

</style>
