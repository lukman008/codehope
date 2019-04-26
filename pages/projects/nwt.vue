<template>
	<v-parallax
    dark
    :src="nwt"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
      <h4 class="subheading">Build your application today!</h4>
    </v-layout>
  </v-parallax>
</template>

<script>
import nwt from "@/assets/nwt.jpg"


export default {
  data() {
    return {
      nwt,
    }
  }
}
</script>

<style>

</style>
