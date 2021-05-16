<template>
  <div style="width: 330px; height: 743px; backgroundColor: rgb(36, 36, 36)"  class="phone_app messages">
    <PhoneTitle :title="plate" backgroundColor="red" color="#FFF" style="backgroundColor: #F1F1F1; color: black" @back="quit"/>

    <div style="width: 326px; height: 678px; backgroundColor: rgb(36, 36, 36);">
        <div v-for='(elem) in vehiclesInfo' v-bind:key="elem.plate" class="garage-cardetails">
          <div class="vehicle-model"><span class="vehicle-detail">Model:</span><span class="vehicle-answer"> {{elem.model}}</span></div>
          <div class="vehicle-plate"><span class="vehicle-detail">Plate:</span><span class="vehicle-answer"> {{elem.plate}}</span></div>
          <div class="vehicle-garage"><span class="vehicle-detail">Garage:</span><span class="vehicle-answer"> {{elem.garageId}}</span></div>
          <div class="vehicle-status"><span class="vehicle-detail">Status:</span><span class="vehicle-answer"> {{ elem.state === 1 ? 'Eingeparkt' : 'Unterwegs'}}</span></div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PhoneTitle from '../PhoneTitle'

export default {
  name: 'garageview',
  components: {
    PhoneTitle
  },
  data () {
    return {
      plate: ''
    }
  },
  methods: {
    quit () {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters(['vehicles', 'useMouse']),
    vehiclesInfo: function () {
      let info = this.vehicles.filter(e => e.plate === this.plate)
      return info
    }
  },
  created () {
    this.plate = this.$route.params.plate
    this.$bus.$on('keyUpBackspace', this.quit)
  },
  beforeDestroy () {
    this.$bus.$off('keyUpBackspace', this.quit)
  }
}
</script>

<style>
.garage-cardetails {
    position: absolute;
    /* background-color: rgba(255, 255, 255, 0.1); */
    height: 76%;
    width: 84%;
    margin: 0 auto;
    left: 0vh;
    right: 0;
    top: 11vh;
}

.vehicle-brand {
    position: relative;
    width: 100%;
    background-color: rgb(54, 54, 54);
    padding: .8vh;
    color: white;
    font-family: 'Heebo', sans-serif;
    border-bottom: .1vh solid #fff;
    margin-bottom: 1vh;
    font-size: 1.2vh;
}

.vehicle-model {
    position: relative;
    width: 100%;
    background-color: rgb(54, 54, 54);
    padding: .8vh;
    color: white;
    font-family: 'Heebo', sans-serif;
    border-bottom: .1vh solid #fff;
    margin-bottom: 1vh;
    font-size: 1.2vh;
}

.vehicle-plate {
    position: relative;
    width: 100%;
    background-color: rgb(54, 54, 54);
    padding: .8vh;
    color: white;
    font-family: 'Heebo', sans-serif;
    border-bottom: .1vh solid #fff;
    margin-bottom: 1vh;
    font-size: 1.2vh;
}

.vehicle-garage {
    position: relative;
    width: 100%;
    background-color: rgb(54, 54, 54);
    padding: .8vh;
    color: white;
    font-family: 'Heebo', sans-serif;
    border-bottom: .1vh solid #fff;
    margin-bottom: 1vh;
    font-size: 1.2vh;
}

.vehicle-status {
    position: relative;
    width: 100%;
    background-color: rgb(54, 54, 54);
    padding: .8vh;
    color: white;
    font-family: 'Heebo', sans-serif;
    border-bottom: .1vh solid #fff;
    margin-bottom: 1vh;
    font-size: 1.2vh;
}
</style>
