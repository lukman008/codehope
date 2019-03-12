<template>
	<v-toolbar app absolute class="elevation-0" color="transparent">
		<v-toolbar-title>
			<img :src="logo" alt="Code Hope" width="100px">
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn outline color="cyan">WHAT WE DO</v-btn>
		<v-btn outline color="cyan">OUR STORY</v-btn>
		<v-btn depressed color="primary">GET INVOLVED</v-btn>
	</v-toolbar>
</template>

<script>

import logo from "@/assets/logo.png";
import logo_circle from "@/assets/logo-circle.png";

export default {
	data () {
		return {
			logo, logo_circle
		}
	}
};
</script>

<style>
</style>
