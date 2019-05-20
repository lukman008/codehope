<template>
	<div>
		<v-toolbar app absolute class="elevation-0" color="transparent">
			<router-link to="/" tag="a">
				<v-toolbar-title>
					<img to="/" :src="logo" alt="Code Hope" width="100px">
				</v-toolbar-title>
			</router-link>
			<v-spacer></v-spacer>
			<div class="hidden-sm-and-down">
				<v-btn outline href="/#what-we-do" color="white">WHAT WE DO</v-btn>
				<v-btn outline href="/gallery" color="white">GALLERY</v-btn>
			</div>
			<v-btn to="/get-involved" depressed color="primary">GET INVOLVED</v-btn>
			<v-menu bottom left class="hidden-md-and-up">
				<v-btn slot="activator" flat icon color="white">
					<v-icon>mdi-menu</v-icon>
				</v-btn>
				<v-list>
					<v-list-tile>
						<v-btn block outline href="/#what-we-do" color="cyan">WHAT WE DO</v-btn>
					</v-list-tile>
					<v-list-tile>
						<v-btn block outline href="/gallery" color="cyan">GALLERY</v-btn>
					</v-list-tile>
				</v-list>
			</v-menu>
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
