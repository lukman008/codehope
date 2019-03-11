<template>
	<v-footer app absolute dark height="auto">
		<v-card tile dark class="flex white--text">
			<v-card-title>
       			&copy;2019 — <strong>Code Hope.</strong>
        		<v-spacer></v-spacer>
				<v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
					<v-icon size="24px">{{ icon }}</v-icon>
				</v-btn>
			</v-card-title>
		</v-card>
	</v-footer>
</template>

<script>
export default {
	data () {
		return {
			icons: [
				'mdi-facebook',
				'mdi-twitter',
				'mdi-linkedin',
				'mdi--instagram'
			]
		}
	}
}
</script>

<style>

</style>
