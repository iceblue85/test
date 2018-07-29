<template>
  <div class="detail">
    <section v-for="item in animals" v-bind:key="item.id" class="detail__info" v-if="detailID == item.id">
        <h1>{{ item.tipo }}</h1>

        <div class="detail__info__box">
          <picture v-if="item.tipo === 'cane'">
            <source media="(min-width: 1024px)" srcset="../assets/cane.svg">
            <img src="../assets/cane.svg" :alt="item.tipo">
          </picture>
          <picture v-else>
            <source media="(min-width: 1024px)" srcset="../assets/gatto.svg">
            <img src="../assets/gatto.svg" :alt="item.tipo">
          </picture>

        <h3>{{item.proprietario}}</h3>
            <span>
              {{item.data}}, {{item.ora}}
            </span>
        </div>

        <section class="detail__info__section">
          <span>
            Motivo visita:
          </span>
          <strong>
            {{item.motivo}}
          </strong>
        </section>


        <section class="detail__info__section">
          <span>
            Diagnosi:
          </span>
          <strong>
            {{item.diagnosi}}
          </strong>
        </section>


        <section class="detail__info__section">
          <span>
            Note:
          </span>
          <strong>
            {{item.note}}
          </strong>
        </section>

    </section>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      animals: this.$root.$data.animals,
      additional: this.$root.$data.additional,
      detailID: 0,
      detail: {}
    }
  },
  created () {
    this.detailID = this.$route.params.id
  },
  computed: {
    title: function () {
      if (this.filter === 'in-visita') {
        return 'Animali in visita'
      } else {}
      return 'Animali visitati'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

$break-small: 320px;
$break-large: 1024px;

.detail {
  &__info {
          display: flex;
      flex-direction: column;
      align-items: center;
      padding: 60px 0;
      > h1 {
      color: #ffffff;
          font-size: 35.79px;
          font-weight: 100;
          text-align: center;
          margin-top: 0px;
      }
      &__box {
         border-radius: 5px;
      background-color:  #ffffff;
      min-width: 248px;
      display: flex;
      flex-direction: column;
      width: 75%;
          height: 93px;
    min-height: 93px;
      box-shadow: 0px 9px 22.56px 1.44px rgba(0, 0, 0, 0.17);
          overflow: visible;
      position: relative;
        > picture {
width: 100px;
    height: 133px;
    position: absolute;
    top: -130px;
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
    padding-left: 0px;
    text-align: center;
    padding-top: 10px;
        }
        > h3 {
          color:  #6c6d8c;
          font-size: 23.79px;/* Approssimazione dovuta alla sostituzione dei font */
          font-weight: 100;
          text-align: left;
    padding-left: 0px;
    text-align: center;
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
      &__section {
        border-top: thin solid #6c6d8c;
        margin-top: 50px; padding-top: 50px;
        padding-left: 5px; padding-right: 5px;
        width:80%;
        > span {
          color:  #6c6d8c;
          font-size: 17.79px;/* Approssimazione dovuta alla sostituzione dei font */
          font-weight: 100;
          text-align: left;
          display: block;
          width:100%
        }
        > strong {
          color:  #6c6d8c;
          font-size: 13.79px;/* Approssimazione dovuta alla sostituzione dei font */
          font-weight: 400;
          text-align: left;
          display: block;
          width:100%;
        }
      }
  }
}


 @media screen and (min-width: $break-large) {

  .detail {
&__info
  {
          &__box {
          width: 623px;
          height: 52px;
          min-height: 52px;
          flex-direction: row;
          align-items: center;
          > picture {
              width: 47px;
              height: 62px;
              top: -50px;
          }
          > span {
              padding-top: 0px;
              width: auto;
              flex: 1 1 200px;
                  padding-left: 0;
          }
          > h3 {
              padding-left: 20px;
              padding: 0px;
              flex: 1 1 500px;
              text-align: center;
              flex: 1 1 50%;
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
          }
          }
        }

  }

 }

</style>
