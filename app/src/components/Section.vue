<template>
  <div class="section">

    <section class="section__info">
      <h1>{{ title }}</h1>
    </section>

    <section class="section__list">

      <ul>
        <li v-for="item in animals" v-bind:key="item.id" v-if="filter === 'in-visita' && !item.visitato">
          <picture v-if="item.tipo === 'cane'">
            <source media="(min-width: 1024px)" srcset="../assets/cane.svg">
            <img src="../assets/cane.svg" :alt="item.tipo">
          </picture>
          <picture v-else-if="item.tipo === 'gatto'">
            <source media="(min-width: 1024px)" srcset="../assets/gatto.svg">
            <img src="../assets/gatto.svg" :alt="item.tipo">
          </picture>
          <picture v-else-if="item.tipo === 'uccello'">
            <source media="(min-width: 1024px)" srcset="../assets/uccello.svg">
            <img src="../assets/uccello.svg" :alt="item.tipo">
          </picture>
          <picture v-else-if="item.tipo === 'topo'">
            <source media="(min-width: 1024px)" srcset="../assets/topo.svg">
            <img src="../assets/topo.svg" :alt="item.tipo">
          </picture>
          <picture v-else-if="item.tipo === 'pesce'">
            <source media="(min-width: 1024px)" srcset="../assets/pesce.svg">
            <img src="../assets/pesce.svg" :alt="item.tipo">
          </picture>
          <span>
            {{item.tipo}}
          </span>
          <h3>{{item.proprietario}}</h3>
          <div>
            <span>
              {{item.data}}, {{item.ora}}
            </span>
          </div>
          <strong>
            {{item.motivo}}
          </strong>
          <router-link :to="{ name: 'Detail', params: { id: item.id } }" >  dettaglio </router-link>
        </li>
        <li v-for="item in animals" v-bind:key="item.id" v-if="filter === 'visitati' && item.visitato">
          <picture v-if="item.tipo === 'cane'">
            <source media="(min-width: 1024px)" srcset="../assets/cane.svg">
            <img src="../assets/cane.svg" :alt="item.tipo">
          </picture>
          <picture v-else-if="item.tipo === 'gatto'">
            <source media="(min-width: 1024px)" srcset="../assets/gatto.svg">
            <img src="../assets/gatto.svg" :alt="item.tipo">
          </picture>
          <picture v-else-if="item.tipo === 'uccello'">
            <source media="(min-width: 1024px)" srcset="../assets/uccello.svg">
            <img src="../assets/uccello.svg" :alt="item.tipo">
          </picture>
          <picture v-else-if="item.tipo === 'topo'">
            <source media="(min-width: 1024px)" srcset="../assets/topo.svg">
            <img src="../assets/topo.svg" :alt="item.tipo">
          </picture>
          <picture v-else-if="item.tipo === 'pesce'">
            <source media="(min-width: 1024px)" srcset="../assets/pesce.svg">
            <img src="../assets/pesce.svg" :alt="item.tipo">
          </picture>
          <span>
            {{item.tipo}}
          </span>
          <h3>{{item.proprietario}}</h3>
          <div>
            <span>
              {{item.data}}, {{item.ora}}
            </span>
          </div>
          <strong>
            {{item.motivo}}
          </strong>
          <router-link :to="{ name: 'Detail', params: { id: item.id } }" >  dettaglio </router-link>
        </li>
      </ul>

    </section>

  </div>
</template>

<script>
export default {
  name: 'section',
  data () {
    return {
      animals: this.$root.$data.animals,
      additional: this.$root.$data.additional,
      filter: 0
    }
  },
  created () {
    this.filter = this.$route.params.filter
  },
  computed: {
    title: function () {
      if (this.filter === 'in-visita') {
        return 'Animali in visita'
      } else {}
      return 'Animali visitati'
    },
    filteredAnimals: function () {
      let formatted = []

      this.animals.map(function (value, key) {
        if (this.filter === 'in-visita' && !value.visitato) {
          formatted.push(value)
        } else if (this.filter === 'visitato' && value.visitato) {
          formatted.push(value)
        } else {
          formatted.push(value)
        }
      })
      return formatted
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

$break-small: 320px;
$break-large: 1024px;

.section {
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
  &__list {
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
      min-height: 201px;
      box-shadow: 0px 9px 22.56px 1.44px rgba(0, 0, 0, 0.17);
          overflow: visible;
      position: relative;
        > picture {
          width: 100px;
          height: 133px;
          position: absolute;
          top: -16px;
          left: -15px;
          > img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
        > span {
          color:  #6c6d8c;
          font-size: 17.79px;/* Approssimazione dovuta alla sostituzione dei font */
          font-weight: 100;
          text-align: left;
              padding-left: 130px;
    padding-top: 10px;
        }
        > h3 {
          color:  #6c6d8c;
          font-size: 23.79px;/* Approssimazione dovuta alla sostituzione dei font */
          font-weight: 100;
          text-align: left;
          padding-left: 130px;
          margin: 0px;
          padding-top: 10px;
        }
        > div {
        padding-left: 130px;
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
          > span {
            color:  #6c6d8c;
            font-size: 13.79px;/* Approssimazione dovuta alla sostituzione dei font */
            font-weight: 100;
            text-align: left;
          }
        }
        > strong {
          color:  #6c6d8c;
          font-size: 13.79px;/* Approssimazione dovuta alla sostituzione dei font */
          font-weight: bold;
          text-align: left;
          text-align: center;
          border-top: thin solid #6c6d8c;
          margin: 0 20px;
          margin-top: 10px;
          padding-top: 10px;
        }
        > a {
          background-color:  #f5f9fc;
          width: 100%;
          height: 43px;
          padding: 0 10px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          color:  #8b97f0;
          font-size: 13.79px;/* Approssimazione dovuta alla sostituzione dei font */
          font-weight: bold;
          text-decoration: none;
          margin-top: 5px;

        }
        &:not(:last-of-type) {
          margin-bottom:22px;
        }
      }
    }
  }

}

 @media screen and (min-width: $break-large) {

  .section {

    &__list {
        ul {
          li {
          width: 623px;
          height: 52px;
          min-height: 52px;
          flex-direction: row;
          align-items: center;
          > picture {
              width: 47px;
              height: 62px;
          }
          > span {
              padding-left: 50px;
              padding-top: 0px;
              width: auto;
              flex: 1 1 200px;
          }
          > h3 {
              padding-left: 20px;
              padding: 0px;
              flex: 1 1 500px;
              text-align: center;
          }
          > div {
              padding-left: 20px;
              padding: 0px;
              width: auto;
              flex: 1 1 550px;
              text-align: center;
          }
          > strong {
              border-top: none;
              border-left: thin solid #6c6d8c;
              margin-top: 0px;
              padding-top: 0px;
              font-weight: bold;
              flex: 1 1 476px;
          }
          > a {
              width: auto;
              margin-top: 0;
              height: 100%;
          }
          }
        }

    }

  }

 }

</style>
