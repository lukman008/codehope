<template>
<div>
	<v-toolbar app absolute class="elevation-0" color="transparent">
		<v-toolbar-title to="/">
			<img to="/" :src="logo" alt="Code Hope" width="100px">
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn outline href="/#what-we-do" color="cyan">WHAT WE DO</v-btn>
		<v-btn outline href="/gallery" color="cyan">GALLERY</v-btn>
		<v-btn  to="/get-involved" depressed color="primary">GET INVOLVED</v-btn>
	</v-toolbar>
	 <v-dialog
      v-model="get_involved"
      fullscreen
    >

			 <v-app dark>
				  <v-toolbar class="elevation-0" dark color="primary">
										 <v-spacer></v-spacer>
										 	<v-btn @click="get_involved=false" icon large> <v-icon>mdi-close</v-icon>  </v-btn>
										
									 </v-toolbar>
				 <v-content>
					 <v-container fluid fill-height>
						 <v-layout align-center justify-center>
							 <v-flex xs12 sm8 md4>
								 <v-card color="transparent" class="elevation-0">
									
									 <v-card-text style="text-align:center;">
										<v-btn style="text-transform:none;text-decoration: underline;"  tarket="_blank"  href="mailto:hello@thecodehope.org?subject=CODE HOPE VOLUNTEER&body=Hi I want to volunteer for code hope" flat class="display-3 font-weight-light" >Volunteer</v-btn>
										<br/><br><br/>
											<v-btn style="text-transform:none;text-decoration: underline;"  tarket="_blank"  href="http://paystack.com/pay/er45tgv" flat class="display-3 font-weight-light" >Donate</v-btn>
									 </v-card-text>
								 </v-card>
							 </v-flex>
						 </v-layout>
					 </v-container>
				 </v-content>
			 </v-app>
    </v-dialog>
</div>
	
</template>

<script>

import logo from "@/assets/logo.png";
import logo_circle from "@/assets/logo-circle.png";

export default {
	data () {
		return {
			logo, logo_circle,
			get_involved: false
		}
	}
};
</script>

<style>
</style>
