<template>
    <div style="margin-top: -64px">
        <!-- <div class="dummy-bg--wrapper" :style="{ 'background-image': `url(${bg}`}"></div> -->
		<v-layout style="position: relative" :style="{ 'background-image': `url(${bg}`}" row wrap tag="section">
			<v-carousel style="height:100vh;"  hide-controls hide-delimiters class="elevation-0">
				<v-carousel-item
					v-for="(item,i) in taglines"
					:key="i"
					style=""
					class=" pt-5"
				>
					<v-layout fill-height justify-center align-center row wrap pt-5>
						<div class="text-xs-center pa-5">
							<h3  class="full-width text-xs-center white-text display-2 font-weight-boldx mb-2">{{item.title}}</h3>
							<p class="title">{{item.subheading}}</p>
						</div>
					</v-layout>
				</v-carousel-item>
			</v-carousel>
			<v-layout row wrap align-center justify-center style="position: absolute; left: 0; right: 0; bottom: 0;" py-3>
				<v-btn light small color="accent" fab @click="$vuetify.goTo($refs['what-we-do'], { duration: 300, easing: 'easeOutQuad' })">
					<v-icon color="black">mdi-chevron-double-down</v-icon>
				</v-btn>
			</v-layout>
		</v-layout>
		<v-layout row wrap tag="section" ref="what-we-do">
			<v-container grid-list-md>
				<v-layout row wrap>
					<v-flex xs12>
						<h2 class="display-1 font-weight-bold text-uppercase text-xs-center my-3">What we do</h2>
					</v-flex>
					<v-flex style="padding-bottom:20px;" xs12 md6>
						<v-card color="transparent" flat>
							<v-img
								:src="img"
								aspect-ratio="1.75"
							>
								<v-layout
									slot="placeholder"
									fill-height
									align-center
									justify-center
									ma-0
								>
									<v-progress-circular indeterminate color="accent"></v-progress-circular>
								</v-layout>
								<v-layout
									fill-height
									align-center
									column
									justify-center
									class="feature-vid-overlay px-5"
									style="background-color: rgba(0,0,0,0.5)"
									ma-0
								>
									<h2 class="headline font-weight-thin mb-1 text-xs-center">Watch Presentation Video</h2>
									<v-btn outline small fab color="primary" style="border-width: 3px">
										<v-icon>mdi-play</v-icon>
									</v-btn>
								</v-layout>
							</v-img>
						</v-card>
					</v-flex>
					<v-flex xs12 md6>
						<v-layout justify-center align-center row wrap>
							<v-flex xs12>
								<v-img
									:src="pg"
									aspect-ratio="1.95"
									width="65%"
									class="d-block mx-auto"
								>
									<v-layout
										slot="placeholder"
										fill-height
										align-center
										justify-center
										ma-0
									>
										<v-progress-circular indeterminate color="accent"></v-progress-circular>
									</v-layout>
								</v-img>
							</v-flex>
							<v-flex xs12>
								<p class="px-5 mt-1 text-xs-justify">Ut enim blandit volutpat maecenas volutpat blandit. Lobortis elementum nibh tellus molestie nunc non blandit. Iaculis urna id volutpat lacus laoreet non</p>
								<v-btn color="primary" large depressed class="d-block mx-auto">
									Volunteer
								</v-btn>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-container>
		</v-layout>
		<v-layout row wrap>
			<v-container grid-list-md>
				<v-layout row wrap>
					<v-flex xs12>
						<h2 class="display-1 font-weight-bold text-uppercase text-xs-center my-3">Programs</h2>
					</v-flex>
					<v-flex v-for="i in 6" :key="i" xs12 sm6 md4>
						<v-card style="min-height:50vh">
							<v-card-title class="title" :class="{ 'blue darken-4': i % 3 == 0, 'title pink lighten-1': i % 2 == 0 || i % 5 == 0, }">
								<h5 class="headline text-xs-center d-block mx-auto">AUGMA</h5>
							</v-card-title>
							<v-img
								:src="augma"
								aspect-ratio="1.75"
							>
								<v-layout
									slot="placeholder"
									fill-height
									align-center
									justify-center
									ma-0
								>
									<v-progress-circular indeterminate color="accent"></v-progress-circular>
								</v-layout>
							</v-img>
							<v-card-text>
								<p class="ma-0">
									Nisi quis eleifend quam adipiscing. Duis ut diam quam nulla. Integer feugiat scelerisque varius morbi enim nunc faucibus. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet massa vitae tortor condimentum lacinia quis vel eros. Sed enim ut sem viverra. At quis risus sed vulputate
								</p>
							</v-card-text>
							<v-card-actions>
								<v-btn color="primary" class="d-block mx-auto">Read more</v-btn>
							</v-card-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-layout>

		<v-layout row wrap tag="section">
			<v-container grid-list-md>
				<v-layout row wrap justify-center align-center style="height: 600px">
					<v-flex xs12>
						<v-layout row wrap py-5 class="showcase-item--wrapper">
							<v-flex xs12>
								<h2 class="display-1 font-weight-bold text-uppercase text-xs-center my-3">Achievements</h2>
							</v-flex>
							<v-flex v-for="(item, index) in showcaseItems" :key="index" xs6 md3 class="my-3">
								<v-layout justify-center align-center column wrap class="showcase-item">
									<v-icon color="primary darken-1" size="2.57em" class="mb-2">{{ item.icon }}</v-icon>
									<div class="text-xs-center">
										<h5 class="text-uppercase font-weight-bold display-1 mb-1">{{ item.value }}</h5>
										<h6 class="text-capitalize font-weight-light body-2">{{ item.name }}</h6>
									</div>
								</v-layout>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-container>
		</v-layout>
		<v-layout row wrap tag="section">
			<v-flex xs12>
				<v-parallax
					dark
					:src="parallax"
				>
					<v-layout
						align-center
						column
						justify-center
					>
						<h3 class="display-2 font-weight-thin mb-3">Be a part of our story</h3>
						<v-btn depressed large color="red lighten-1 white--text">GET INVOLVED</v-btn>
					</v-layout>
				</v-parallax>
			</v-flex>
		</v-layout>
    </div>
</template>

<script>
import bg from "@/assets/slider.png";
import pg from "@/assets/programmer.svg";
import img from "@/assets/5.jpg";
import augma from "@/assets/3.jpg";
import img2 from "@/assets/4.jpg";
import parallax from "@/assets/parallax.png";
export default {

    data() {
        return {
            bg,
            pg,
            img,
            augma,
            img2,
            parallax,
            taglines:[
                {
                    title: "WE  ARE  SHAPING  AFRICA'S  FUTURE ",
                    subheading:"A subheading here"
                },
                {
                    title: "WE ARE DOING THIS",
                    subheading:"A subheading here"
                },
                {
                    title: "AND ALSO THAT ",
                    subheading:"A subheading here"
                },

			],
			showcaseItems: [
				{ name: 'Schools Visited', value: '87', icon: 'mdi-school' },
				{ name: 'Kids Trained', value: '5 K', icon: 'mdi-human-male-female' },
				{ name: 'ICT Equiped', value: '5', icon: 'mdi-bank' },
				{ name: 'Proud Volunteers', value: '25', icon: 'mdi-emoticon' }
				// for design purposes, keep this has 4
			],
        }
    },
}
</script>

<style>
.dummy-bg--wrapper {
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-position: center top;
  background-size: cover;
}
.showcase-item--wrapper {
	box-shadow: 0 24px 35px rgba(0,0,0,.06);
	background-color: rgba(37, 35, 35, 0.89);
	background-attachment: fixed;
	min-width: 200px;
}
.showcase-item--wrapper .showcase-item h5 {
	letter-spacing: 1px;
}
</style>