<template>
  <div>
    <v-toolbar app absolute class="elevation-0" color="transparent">
      <v-toolbar-title to="/">
        <img to="/" :src="logo" alt="Code Hope" width="100px">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outline href="/#what-we-do" color="cyan">WHAT WE DO</v-btn>
      <v-btn outline href="/gallery" color="cyan">GALLERY</v-btn>
      <v-btn to="/get-involved" depressed color="primary">GET INVOLVED</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
import logo_circle from "@/assets/logo-circle.png";

export default {
  data() {
    return {
      logo,
      logo_circle,
      get_involved: false
    };
  }
};
</script>

<style>
</style>
