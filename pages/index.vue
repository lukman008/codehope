<template>
	<div>
		<v-layout
			style="position: relative;"
			class="dummy-bg--wrapper"
			:style="{ 'background-image': `url(${bg})`}"
			column
			wrap
			tag="section"
		>
			<v-flex grow>
				<v-layout row wrap style="height: calc(100vh - 100px);">
					<v-carousel height="calc(100vh - 100px);" hide-controls hide-delimiters class="elevation-0">
						<v-carousel-item v-for="(item,i) in taglines" :key="i" class="pt-">
							<v-container fill-height grid-list-lg>
								<v-layout fill-height justify-center align-center row wrap pa-5>
									<div class="text-xs-center mt-5 mx-5">
										<h3
											class="full-width text-xs-center white-text display-2 font-weight-bold mb-2"
										>{{item.title}}</h3>
										<p class="title">{{item.subheading}}</p>
									</div>
								</v-layout>
							</v-container>
						</v-carousel-item>
					</v-carousel>
				</v-layout>
			</v-flex>
			<v-flex shrink>
				<v-layout row wrap align-center justify-center style="height: 100px">
					<v-btn
						light
						small
						color="accent"
						fab
						@click="$vuetify.goTo($refs['what-we-do'], { duration: 300, easing: 'easeOutQuad' })"
					>
						<v-icon color="black">mdi-chevron-double-down</v-icon>
					</v-btn>
				</v-layout>
			</v-flex>
		</v-layout>
		<v-layout row wrap tag="section" ref="what-we-do">
			<v-container grid-list-lg>
				<v-layout row wrap>
					<v-flex xs12 md6>
						<h2
							class="display-1 font-weight-bold text-uppercase text-xs-center text-md-right mt-5 mb-3"
						>What we do</h2>
						<div class="mt-1 text-xs-justify text-md-right">
							<p>Through diverse projects and partnerships, we provide kids, women and youth with the opportunities to acquire technology skills on topics including, Web development, Mobile app development, Digital Marketing, Graphics Design, Games Development and Embedded systems/robotics development.</p>
							<p>The Jobs available today will no longer be available few years from now as technology continues to change the way we interact with ourselves and our environment. We are bridging the skills gap by ensuring kids, youths and women in underserved and rural communities are equipped with skills necessary to access the technology opportunities available today and the ones that will dominate the future, while also encouraging them to apply the skills to solve problems around them.</p>
						</div>
					</v-flex>
					<v-flex xs12 md6>
						<v-layout fill-height justify-center align-center row wrap style="min-height: 400px">
							<v-flex xs10>
								<v-img src="/img/CODEHOPE-7.jpg" height="100%" width="100%" cover>
									<v-layout slot="placeholder" fill-height align-center justify-center ma-0>
										<v-progress-circular indeterminate color="accent"></v-progress-circular>
									</v-layout>
								</v-img>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-container>
		</v-layout>

		<v-layout row wrap style="height: 50vh" tag="section">
			<v-card width="100%" height="100%" color="transparent" flat>
				<v-img :src="img" height="100%">
					<v-layout slot="placeholder" fill-height align-center justify-center ma-0>
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
		</v-layout>

		<v-layout row wrap>
			<v-container grid-list-xl>
				<v-layout row wrap>
					<v-flex xs12 md6>
						<v-layout fill-height justify-center align-center row wrap style="min-height: 400px">
							<v-flex xs10>
								<v-img :src="bim" height="100%" width="100%" cover>
									<v-layout slot="placeholder" fill-height align-center justify-center ma-0>
										<v-progress-circular indeterminate color="accent"></v-progress-circular>
									</v-layout>
								</v-img>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex xs12 md6>
						<h2
							class="display-1 font-weight-bold text-uppercase text-xs-center text-md-left mt-5 mb-3"
						>Code Hope Rural Labs</h2>
						<div class="mt-1 text-xs-justify text-md-left">
							<p>Code Hope Labs is our Long term, Major Program. Through the program, we equip rural communities (usually via schools located in the community) with a computer lab and provide trainers who teach the students basic computing, and general coding skills. Once the basic classes are completed, they are trained on Web and mobile apps development, and are also introduced to robotics and game development. So far, In partnership with the EquipAKschool Initiative, we have equipped two schools in communities in Ondo and Ekiti States with over 80 computers with about 1500 students being impacted. We believe these kids deserve an opportunity to acquire these skills so they can access the opportunities the future is set to bring.</p>
						</div>
					</v-flex>
				</v-layout>
			</v-container>
		</v-layout>

		<v-layout row wrap tag="section">
			<v-container grid-list-xl>
				<v-layout row wrap>
					<v-flex xs12 mt-5>
						<h2 class="display-1 font-weight-bold text-uppercase text-xs-center mb-3">Programs</h2>
					</v-flex>
					<v-flex xs12>
						<v-layout row wrap justify-center mb-1>
							<v-flex xs12 md10>
								<p class="headline font-weight-light px-3 text-xs-center">Asides our main projects, we partner with other organizations and leverage on other programs to enable us reach more communities.</p>			
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex v-for="(program,i) in programs" :key="i" xs12 sm6 md4>
						<v-hover>
							<v-card slot-scope="{ hover }" hover>
								<v-img :src="program.image" aspect-ratio="1.75">
									<v-layout slot="placeholder" fill-height align-center justify-center ma-0>
										<v-progress-circular indeterminate color="accent"></v-progress-circular>
									</v-layout>
									<v-expand-transition>
										<div
											v-if="hover"
											class="transition-fast-in-fast-out primary darken-2 v-card--reveal white--text ma-0 caption pa-3"
											style="height: 100%;"
										>
											<p v-html="`${program.description}`"></p>
											<v-btn outline color="accent" :href="program.url" class="mx-auto">Read more</v-btn>
										</div>
									</v-expand-transition>
								</v-img>
								<v-card-title class="title">
									<h5 class="headline text-xs-center d-block mx-auto">{{program.title}}</h5>
								</v-card-title>
							</v-card>
						</v-hover>
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

		<v-layout row wrap>
			<v-container grid-list-md>
				<v-layout row wrap justify-center align-center mb-5>
					<v-flex xs12>
						<h2 class="display-1 font-weight-bold text-uppercase text-xs-center my-3">Our Partners</h2>
					</v-flex>
					<v-flex v-for="(item, i) in partners" :key="i" xs2>
						<v-tooltip bottom>
							<template slot="activator">
								<v-card flat width="100%" color="transparent" class="pa-2">
									<v-img :src="item.src" height="150px" contain>
										<v-layout slot="placeholder" fill-height align-center justify-center ma-0>
											<v-progress-circular indeterminate color="accent"></v-progress-circular>
										</v-layout>
									</v-img>
								</v-card>
							</template>
							<span>{{item.tag}}</span>
						</v-tooltip>
					</v-flex>
				</v-layout>
			</v-container>
		</v-layout>

		<v-layout row wrap>
			<v-container grid-list-md>
				<v-layout row wrap justify-space-around align-center mb-3>
					<v-flex xs12 mb-3>
						<p class="text-xs-center headline font-weight-light">Follow us on social media <br> <span class="accent--text">@thecodehope</span></p>
					</v-flex>
					<v-flex shrink>
						<v-card width="300px">
							<a class="twitter-timeline ma-0" data-width="300" data-height="580" data-theme="dark" href="https://twitter.com/thecodehope?ref_src=twsrc%5Etfw">Tweets by thecodehope</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
						</v-card>
					</v-flex>
					<v-flex shrink>
						<v-card width="300px">
							<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/BsKhIV-leG9/" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/BsKhIV-leG9/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BsKhIV-leG9/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Teachers need to integrate technology seamlessly into the curriculum instead of viewing it as an add-on, an afterthought, or an event.” - Heidi-Hayes Jacobs - #Tech #children #javascript #Africa #Nigeria #Akure #coding</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/thecodehope/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> CodeHope</a> (@thecodehope) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2019-01-03T07:39:29+00:00">Jan 2, 2019 at 11:39pm PST</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>
						</v-card>
					</v-flex>
					<v-flex shrink>
						<v-card width="300px" height="580px">
							<!-- remove this and put facebook emded code -->
							<v-layout row wrap justify-center align-center fill-height>
								<p class="display-1 font-weight-thin ma-0">Facebook</p>
							</v-layout>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-layout>

		<v-layout row wrap tag="section">
			<v-flex xs12>
				<v-parallax dark :src="parallax">
					<v-layout align-center column justify-center>
						<h3 class="display-2 font-weight-thin mb-3">Be a part of our story</h3>
						<v-btn
							depressed
							large
							color="red lighten-1 white--text"
							to="/get-involved"
						>GET INVOLVED</v-btn>
					</v-layout>
				</v-parallax>
			</v-flex>
		</v-layout>
		<!-- <v-dialog v-model="get_involved" fullscreen>
      <v-app dark>
        <v-toolbar class="elevation-0" dark color="primary">
          <v-spacer></v-spacer>
          <v-btn @click="get_involved=false" icon large>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-content>
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-card color="transparent" class="elevation-0">
                  <v-card-text style="text-align:center;">
                    <v-btn
                      style="text-transform:none;text-decoration: underline;"
                      tarket="_blank"
                      href="mailto:hello@thecodehope.org?subject=CODE HOPE VOLUNTEER&body=Hi I want to volunteer for code hope"
                      flat
                      class="display-3 font-weight-light"
                    >Volunteer</v-btn>
                    <br>
                    <br>
                    <br>
                    <v-btn
                      style="text-transform:none;text-decoration: underline;"
                      target="_blank"
                      href="http://paystack.com/pay/er45tgv"
                      flat
                      class="display-3 font-weight-light"
                    >Donate</v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </v-app>
		</v-dialog> -->
	</div>
</template>

<script>
import bg from "@/assets/slider3.jpg";
import pg from "@/assets/programmer.svg";
import img from "@/assets/5.jpg";
import augma from "@/assets/3.jpg";
import kids from "@/assets/kids.jpg";
import nwt from "@/assets/nwt.jpg";
import wc3 from "@/assets/wc3.jpg";
import acw from "@/assets/acw.jpg";
import hoc from "@/assets/hoc.jpg";
import bim from "@/assets/bim.jpg";
import img2 from "@/assets/4.jpg";
import parallax from "@/assets/parallax.png";

export default {
	data() {
		return {
			bg,
			pg,
			img,
			hoc,
			augma,
			kids,
			acw,
			img2,
			nwt,
			bim,
			parallax,
			get_involved: false,
			taglines: [
				{
					title: "WE  ARE  SHAPING  AFRICA'S  FUTURE . . .",
					subheading:
						"We are providing, kids, youths and women in rural and underserved communities with opportunities to acquire technology skills."
				},
				{
					title: "WE ARE BUILDING TOMORROW, TODAY",
					subheading: ""
				}
			],
			programs: [
				{
					title: "NWT",
					description: `NWT is an initiative of Tech4Dev, funded by Microsoft. It is an experiential learning program aimed at building digital literacy especially coding and analytical skills in young women, exposing them to available employment and entrepreneurship opportunities within the technology space. 
`,
					image: nwt,
					url: "http://nigerianwomentechsters.org"
					// url: "/projects/nwt"
				},
				{
					title: "AUGMA ROADSHOW",
					image: augma,
					description: `As part of our initiative to help educate young students in primary and secondary schools all over West Africa, Augma Roadshow is an ongoing roadshow to visit schools and teach students several important topics in STEM using Augmented reality.`,
					url: "http://augma.org"
				},
				{
					title: "AFRICA CODE WEEK",
					image: acw,
					url: "https://africacodeweek.org/",
					description: `<p style='text-align:center;'><strong >READ, WRITE, COUNT, CODE</strong> </p>
			Africa code week has been a very important opportunity for us to reach out to kids in rural and underserved communities.<br>Supported by Google, we have been organizing African code week events since 2017 and had trained over 2000 kids and youths`
				},
				{
					title: "Code Outreach",
					image: kids,
					url:
						"http://devsdistrictnigeria.com/events/worldchangers13/",
					description: `<strong>Can Code? Can Change the world!</strong><br> <br> We partnered the Christ Embassy Inner City Mission for Children to equip 13-15 year-olds with ICT skills.The event was aimed to collaborate with teachers, peers and also to support when participants needs help.`
				},
				{
					title: "HOUR OF CODE",
					image: hoc,
					url: "https://hourofcode.com/",
					description: `<strong>What will you create?</strong><br>
			The Hour of Code started as a one-hour introduction to computer science, designed to demystify "code", to show that anybody can learn the basics, and to broaden participation in the field of computer science.`
				},
				{
					title: "KIDS CAN CODE",
					image: wc3,
					url: "http://devsdistrictnigeria.com",
					description: `Think your kids are too young to learn to code? Think again. <br> Four and five-year-olds can learn the foundations of coding and computer commands before they can even write and spell words. Our Kids Can Code program is aimed at teaching building ICT proteges by imbibing kids with digital skills at a very young age. <br>`
				}
			],
			showcaseItems: [
				{ name: "Schools Visited", value: "55", icon: "mdi-school" },
				{ name: "Training Reach", value: "9 K", icon: "mdi-human-male-female" },
				{ name: "ICodehope Rural Labs Equipped", value: "3", icon: "mdi-bank" },
				{ name: "Proud Volunteers", value: "25", icon: "mdi-emoticon" }
				// for design purposes, keep this has 4
			],
			partners: [
				{ src: '/img/partners/British-Council-logo.jpg', tag: 'British Council' },
				{ src: '/img/partners/kvd5thafvmrlu4cweayw.webp', tag: 'Dev\'s  District' },
				{ src: '/img/partners/google-logo.png', tag: 'Google' },
				{ src: '/img/partners/acwLogo.png', tag: 'Africa Code Week' },
				{ src: '/img/partners/TECH4DEV-LOGO.jpg', tag: 'Tech4Dev' },
				{ src: '/img/partners/logo.jpg', tag: 'Cape Town Science Centre' },
				{ src: '/img/partners/mslogo.jpg', tag: 'Microsoft' },
			]
		};
	}
};
</script>

<style>
.dummy-bg--wrapper {
	height: 100vh;
	widows: 100vw;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	background-position: center top;
	background-size: cover;
}
.showcase-item--wrapper {
	box-shadow: 0 24px 35px rgba(0, 0, 0, 0.06);
	background-color: rgba(37, 35, 35, 0.89);
	background-attachment: fixed;
	min-width: 200px;
}
.showcase-item--wrapper .showcase-item h5 {
	letter-spacing: 1px;
}
.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: center;
	/* opacity: .5; */
	position: absolute;
	width: 100%;
}
</style>