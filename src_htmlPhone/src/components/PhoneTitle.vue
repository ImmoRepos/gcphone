<template>
  <div class="phone_title_content" :style="style" :class="{'hasInfoBare': showInfoBare}" >
    <InfoBare v-if="showInfoBare" />
    <div class="phone_title" :style="style">
      <button class="btn-back" :style="{color: color}" @click.stop="back"><i class="fas fa-angle-left" @click.stop="back"></i></button>
      {{title}}
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import InfoBare from './InfoBare'

export default {
  components: {
    InfoBare
  },
  computed: {
    ...mapGetters(['themeColorTitle']),
    style () {
      return {
        backgroundColor: this.backgroundColor || this.themeColorTitle,
        color: this.color || '#000'
      }
    }
  },
  methods: {
    back () {
      this.$emit('back')
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    showInfoBare: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String
    },
    color: {
      type: String
    }
  }
}
</script>
<style scoped>
</style>
