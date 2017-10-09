<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <compSidebar v-for="artikel in allArtikel" v-bind:propSidebar="artikel" v-bind:key="artikel._id"/>
      </div>
      <div class="col-md-8">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import compSidebar from '@/components/Sidebar'

export default {
  components: {
    compSidebar
  },
  data () {
    return {
      allArtikel: []
    }
  },
  methods: {
    getArtikel () {
      this.$http.get('/artikels')
      .then(dataArtikel => {
        console.log(dataArtikel.data)
        this.allArtikel = dataArtikel.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getArtikel()
  }
}
</script>


<style lang="css">
</style>
