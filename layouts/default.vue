<template>
	<v-app dark color="grey darken-4">
		<Toolbar />
		<v-content>
			<nuxt />
		</v-content>
		<Footer />
	</v-app>
</template>

<script>

import Toolbar from '~/components/Toolbar';
import Footer from '~/components/Footer';

import logo from "@/assets/logo.png";
import logo_circle from "@/assets/logo-circle.png";

export default {
	components: {
		Toolbar,
		Footer
	},
	data() {
		return {
			logo,
			logo_circle,
			icons: [
				"mdi-facebook",
				"mdi-twitter",
				"mdi-linkedin",
				"mdi--instagram"
			]
		};
	}
};
</script>

