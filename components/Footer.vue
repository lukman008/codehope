<template>
	<v-footer app absolute dark height="auto">
		<v-card tile dark class="flex white--text">
			<v-card-title>
       			&copy;2020 — <strong style="padding: 5px;"> Code Hope, </strong><i> An Initiative of Dev’s District Nigeria.</i>
        		<v-spacer></v-spacer>
				<v-btn v-for="icon in icons" target="_blank" :href="icon.url" :key="icon.icon" class="mx-3 white--text" icon>
					<v-icon size="24px">{{ icon.icon }}</v-icon>
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
				{ 
					icon: 'mdi-twitter',
					url: "https://twitter.com/thecodehope"
				},
				{
					icon: 'mdi-facebook',
					url:"https://facebook.com/thecodehope"
		},{
			icon: 'mdi-instagram',
			url:"https://www.instagram.com/thecodehope/"
		}
				
			]
		}
	}
}
</script>

<style>

</style>
