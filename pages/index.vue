<template>
  <div style="margin-top: -64px">
    <!-- <div class="dummy-bg--wrapper" :style="{ 'background-image': `url(${bg}`}"></div> -->
    <v-layout
      style="position: relative;width:100vw"
      class="dummy-bg--wrapper"
      :style="{ 'background-image': `url(${bg})`}"
      row
      wrap
      tag="section"
    >
      <v-carousel style="height:100vh;" hide-controls hide-delimiters class="elevation-0">
        <v-carousel-item v-for="(item,i) in taglines" :key="i" style class="pt-5">
          <v-layout fill-height justify-center align-center row wrap pt-5>
            <div class="text-xs-center pa-5">
              <h3
                class="full-width text-xs-center white-text display-2 font-weight-boldx mb-2"
              >{{item.title}}</h3>
              <p class="title">{{item.subheading}}</p>
            </div>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
      <v-layout
        row
        wrap
        align-center
        justify-center
        style="position: absolute; left: 0; right: 0; bottom: 0;"
        py-3
      >
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
    </v-layout>
    <v-layout row wrap tag="section" ref="what-we-do">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <h2 class="display-1 font-weight-bold text-uppercase text-xs-center my-3">What we do</h2>
          </v-flex>
          <v-flex style="padding-bottom:20px;" xs12 md6>
            <v-card color="transparent" flat>
              <v-img :src="img" aspect-ratio="1.25">
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
          </v-flex>
          <v-flex xs12 md6>
            <v-layout justify-center align-center row wrap>
              <v-flex xs12>
                <v-img :src="pg" aspect-ratio="1.95" width="65%" class="d-block mx-auto">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="accent"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-flex>
              <v-flex xs12>
                <p class="px-5 mt-1 text-xs-justify">
                  Through diverse projects and partnerships, we provide kids, women and youth with the opportunities to acquire technology skills on topics including, Web development, Mobile app development, Digital Marketing, Graphics Design, Games Development and Embedded systems/robotics development.
                  <br>The Jobs available today will no longer be available few years from now as technology continues to change the way we interact with ourselves and our environment. We are bridging the skills gap by ensuring kids, youths and women in underserved and rural communities are equipped with skills necessary to access the technology opportunities available today and the ones that will dominate the future, while also encouraging them to apply the skills to solve problems around them.
                </p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <v-layout row wrap>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 mt-4>
            <h2
              class="display-1 font-weight-bold text-uppercase text-xs-center my-3"
            >Code Hope Rural Labs</h2>
          </v-flex>

          <!-- <v-card-text> -->
          <v-flex xs12 md6>
            <p
              class="px-1 mt-1 text-xs-justify"
            >Code Hope Labs is our Long term, Major Program. Through the program, we equip rural communities (usually via schools located in the community) with a computer lab and provide trainers who teach the students basic computing, and general coding skills. Once the basic classes are completed, they are trained on Web and mobile apps development, and are also introduced to robotics and game development. So far, In partnership with the EquipAKschool Initiative, we have equipped two schools in communities in Ondo and Ekiti States with over 80 computers with about 1500 students being impacted. We believe these kids deserve an opportunity to acquire these skills so they can access the opportunities the future is set to bring.</p>
          </v-flex>

          <v-flex xs12 md6>
            <!-- <v-card style="min-height:50vh"> -->
            <v-hover>
              <v-img :src="img2" aspect-ratio="1.95" width="90%" class="d-block mx-auto">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="accent"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-hover>
          </v-flex>
          <!-- </v-card-text> -->
          <!-- <v-card-actions> -->
          <!-- <v-btn color="primary"  href="#" class=" mx-auto">Read more</v-btn> -->
          <!-- </v-card-actions> -->
          <!-- </v-card> -->
          <v-flex xs12 mt-5>
            <h2 class="display-1 font-weight-bold text-uppercase text-xs-center my-3">Programs</h2>
          </v-flex>
          <v-flex v-for="(program,i) in programs" :key="i" xs12 sm6 md4>
            <v-hover>
              <v-card slot-scope="{ hover }" style>
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
                <h2
                  class="display-1 font-weight-bold text-uppercase text-xs-center my-3"
                >Achievements</h2>
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
        <v-parallax dark :src="parallax">
          <v-layout align-center column justify-center>
            <h3 class="display-2 font-weight-thin mb-3">Be a part of our story</h3>
            <v-btn
              @click="get_involved=true"
              depressed
              large
              color="red lighten-1 white--text"
            >GET INVOLVED</v-btn>
          </v-layout>
        </v-parallax>
      </v-flex>
    </v-layout>
    <v-dialog v-model="get_involved" fullscreen>
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
    </v-dialog>
  </div>
</template>

<script>
import bg from "@/assets/slider.png";
import pg from "@/assets/programmer.svg";
import img from "@/assets/5.jpg";
import augma from "@/assets/3.jpg";
import kids from "@/assets/kids.jpg";
import nwt from "@/assets/nwt.jpg";
import wc3 from "@/assets/wc3.jpg";
import acw from "@/assets/acw.jpg";
import hoc from "@/assets/hoc.jpg";
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
      parallax,
      get_involved: false,
      taglines: [
        {
          title: "WE  ARE  SHAPING  AFRICA'S  FUTURE . . .",
          subheading:
            "We are providing, kids, youths and women in rural and underserved communities with opportunities to acquire technology skills."
        },
        {
          title: "WE ARE BUILDING TOMORROW, TODAY"
        }
      ],
      programs: [
        {
          title: "NWT",
          description: `NWT is an initiative of Tech4Dev, funded by Microsoft. It is an experiential learning program aimed at building digital literacy especially coding and analytical skills in young women, exposing them to available employment and entrepreneurship opportunities within the technology space. 
`,
          image: nwt,
          url: "http://nigerianwomentechsters.org"
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
          url: "http://devsdistrictnigeria.com/events/worldchangers13/",
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
        { name: "Schools Visited", value: "87", icon: "mdi-school" },
        {
          name: "Kids Trained",
          value: "5 K",
          icon: "mdi-human-male-female"
        },
        { name: "ICT Labs Equiped", value: "5", icon: "mdi-bank" },
        { name: "Proud Volunteers", value: "25", icon: "mdi-emoticon" }
        // for design purposes, keep this has 4
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