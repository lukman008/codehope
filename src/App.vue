<template>
  <v-app id="app" color="grey darken-4" >
    <v-toolbar absolute class="elevation-0" color="transparent">
      <v-avatar size="144" >
        <v-img :src="logo"></v-img>
      </v-avatar>
      <v-spacer></v-spacer>
      <v-btn outline color="cyan">WHAT WE DO</v-btn>
      <v-btn outline  color="cyan">OUR STORY</v-btn>
      <v-btn depressed large color="red lighten-1 white--text">GET INVOLVED</v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      dark
      class=" white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 — <strong>CODE HOPE </strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>

import logo from '@/assets/logo.png'
import logo_circle from '@/assets/logo-circle.png'
export default {
  data() {
    return {
    logo,
    logo_circle,
     icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi--instagram'
      ]
    }
  },
}
</script>

