<template>
<div class="garage-app">
  <PhoneTitle title="Garage" backgroundColor="red" color="white" showInfoBare="true" @back="back"/>
  <list :showHeader="false" :list="vehiclesData" @select="onSelect"></list>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import PhoneTitle from '../PhoneTitle'
import List from '@/components/List'

export default {
  name: 'garage',
  components: {
    PhoneTitle, List
  },
  methods: {
    back () {
      this.$router.push({ name: 'home' })
    },
    onSelect: function (data) {
      this.$router.push({name: 'garage.view', params: data})
    }
  },
  computed: {
    ...mapGetters(['vehicles']),
    vehiclesData: function () {
      let vehicles = this.vehicles
      let mess = []
      Object.keys(vehicles).forEach(key => {
        mess.push({
          display: vehicles[key].plate,
          plate: vehicles[key].plate,
          keyDesc: vehicles[key].model
        })
      })
      return mess
    }
  },
  created () {
    this.$bus.$on('keyUpBackspace', this.back)
  },
  beforeDestroy () {
    this.$bus.$off('keyUpBackspace', this.back)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap');
</style>
