<template>
    <div>
        <div class="dummy-bg--wrapper" :style="{ 'background-image': `url(${bg}`}"></div>
        <v-app dark>
           <v-content>
                <v-container style="height:100vh;" fluid fill-height>
                    <v-layout row wrap  align-center align-content-center justify-center>
                        <v-flex xs12>
                            <v-carousel  hide-controls hide-delimiters >
                                    <v-carousel-item
                                        v-for="(item,i) in taglines"
                                        :key="i"
                                        style=""
                                        >
                                        <p style="text-align:center" class="full-width text-xs-center white-text display-4 font-weight-light">{{item.title}}</p>
                                        <p style="text-align:center"  class="display-1">{{item.subheading}}</p>
                                    </v-carousel-item>
                            </v-carousel>
                        </v-flex>
                        <v-flex xs12 style="text-align:center">
                            <v-btn absolute large color="cyan" fab  >
                                <v-icon>mdi-chevron-double-down</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
                <div color="teal" style="min-height:80vh; padding-left:20px; padding-right 20px;">
                   <v-card class="elevation-0" color="transparent">
                       <v-card-text>
                            <v-layout row wrap justify-space-around align-center>
                        <v-flex xs12>
                            <p style="text-align:center">
                                <v-icon style="font-size:15px !important;padding:10px" medium>mdi-checkbox-blank-circle</v-icon>
                                <span style="text-align:center"  class="display-3 font-weight-medium" >What we do</span>
                                <v-icon style="font-size:15px !important;padding:10px" medium>mdi-checkbox-blank-circle</v-icon>
                            </p>
                        </v-flex>
                        <v-flex style="padding-bottom:20px;" xs12 md7>
                            <v-card color="transparent" class="elevation-0">
                                <v-img
                                :src="img"
                                aspect-ratio="1.75"
                                ></v-img>
                            </v-card>
                        </v-flex>
                         <v-flex xs12 sm6 md3>
                            <v-card color="transparent" class="elevation-0">
                                <v-img
                                :src="pg"
                                aspect-ratio="1.75"
                                ></v-img>

                                <v-card-text>
                                    <div class="headline text-xs-justify"> Ut enim blandit volutpat maecenas volutpat blandit. Lobortis elementum nibh tellus molestie nunc non blandit. Iaculis urna id volutpat lacus laoreet non </div>
                                    
                                </v-card-text>
                                <v-card-actions>
                                  <v-layout row justify-center align-center>
                                      <v-flex xs4>
                                        <v-btn color="cyan darken-1" large depressed>
                                            VOLUNTEER
                                        </v-btn>
                                      </v-flex>
                                  </v-layout>
                                </v-card-actions>

                            </v-card>
                        </v-flex>
                        <v-flex style="height:50px;" hidden-sm-and-down xs12>

                        </v-flex>
                    </v-layout>
                       </v-card-text>
                   </v-card>
                </div>
                <v-card class="elevation-0" style="height:75px;margin-bottom:30px;padding:15px;" color="transparent">
                    <p class="display-2" style="text-align:center;">
                        PROGRAMS
                    </p>
                </v-card>
                
                <div>
                    <v-layout style="padding-bottom:20px;" row wrap justify-space-around align-center>
                        <v-flex xs12 md3>
                            <v-card style="min-height:50vh">
                                <v-card-title  class="title blue darken-4">
                                    <v-spacer>

                                    </v-spacer>
                                    <p class="headline">AUGMA</p>
                                    <v-spacer>

                                    </v-spacer>
                                </v-card-title>
                                
                                 <v-img
                                :src="augma"
                                aspect-ratio="1.75"
                                ></v-img>
                                <v-card-text>
                                 <p>
                                     Nisi quis eleifend quam adipiscing. Duis ut diam quam nulla. Integer feugiat scelerisque varius morbi enim nunc faucibus. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet massa vitae tortor condimentum lacinia quis vel eros. Sed enim ut sem viverra. At quis risus sed vulputate
                                 </p>
                                       
                                </v-card-text>
                            </v-card>
                        </v-flex>
                         <v-flex xs12 md3>
                            <v-card style="min-height:50vh">
                                <v-card-title  class="title cyan darken-4">
                                    <v-spacer>

                                    </v-spacer>
                                    <p class="headline">AUGMA</p>
                                    <v-spacer>

                                    </v-spacer>
                                </v-card-title>
                                
                                 <v-img
                                :src="augma"
                                aspect-ratio="1.75"
                                ></v-img>
                                <v-card-text>
                                 <p>
                                     Nisi quis eleifend quam adipiscing. Duis ut diam quam nulla. Integer feugiat scelerisque varius morbi enim nunc faucibus. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet massa vitae tortor condimentum lacinia quis vel eros. Sed enim ut sem viverra. At quis risus sed vulputate
                                 </p>
                                       
                                </v-card-text>
                            </v-card>
                        </v-flex>
                         <v-flex xs12 md3>
                            <v-card hover style="min-height:50vh">
                                <v-card-title  class="title pink lighten-1">
                                    <v-spacer>

                                    </v-spacer>
                                    <p class="headline">AUGMA</p>
                                    <v-spacer>

                                    </v-spacer>
                                </v-card-title>
                                
                                 <v-img
                                :src="augma"
                                aspect-ratio="1.75"
                                ></v-img>
                                <v-card-text>
                                 <p>
                                     Nisi quis eleifend quam adipiscing. Duis ut diam quam nulla. Integer feugiat scelerisque varius morbi enim nunc faucibus. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet massa vitae tortor condimentum lacinia quis vel eros. Sed enim ut sem viverra. At quis risus sed vulputate
                                 </p>
                                       
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        
                    </v-layout>
                      <v-layout row wrap justify-space-around align-center>
                        <v-flex xs12 md3>
                            <v-card style="min-height:50vh">
                                <v-card-title  class="title blue darken-4">
                                    <v-spacer>

                                    </v-spacer>
                                    <p class="headline">AUGMA</p>
                                    <v-spacer>

                                    </v-spacer>
                                </v-card-title>
                                
                                 <v-img
                                :src="augma"
                                aspect-ratio="1.75"
                                ></v-img>
                                <v-card-text>
                                 <p>
                                     Nisi quis eleifend quam adipiscing. Duis ut diam quam nulla. Integer feugiat scelerisque varius morbi enim nunc faucibus. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet massa vitae tortor condimentum lacinia quis vel eros. Sed enim ut sem viverra. At quis risus sed vulputate
                                 </p>
                                       
                                </v-card-text>
                            </v-card>
                        </v-flex>
                         <v-flex xs12 md3>
                            <v-card style="min-height:50vh">
                                <v-card-title  class="title cyan darken-4">
                                    <v-spacer>

                                    </v-spacer>
                                    <p class="headline">AUGMA</p>
                                    <v-spacer>

                                    </v-spacer>
                                </v-card-title>
                                
                                 <v-img
                                :src="augma"
                                aspect-ratio="1.75"
                                ></v-img>
                                <v-card-text>
                                 <p>
                                     Nisi quis eleifend quam adipiscing. Duis ut diam quam nulla. Integer feugiat scelerisque varius morbi enim nunc faucibus. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet massa vitae tortor condimentum lacinia quis vel eros. Sed enim ut sem viverra. At quis risus sed vulputate
                                 </p>
                                       
                                </v-card-text>
                            </v-card>
                        </v-flex>
                         <v-flex xs12 md3>
                            <v-card hover style="min-height:50vh">
                                <v-card-title  class="title pink lighten-1">
                                    <v-spacer>

                                    </v-spacer>
                                    <p class="headline">AUGMA</p>
                                    <v-spacer>

                                    </v-spacer>
                                </v-card-title>
                                
                                 <v-img
                                :src="augma"
                                aspect-ratio="1.75"
                                ></v-img>
                                <v-card-text>
                                 <p>
                                     Nisi quis eleifend quam adipiscing. Duis ut diam quam nulla. Integer feugiat scelerisque varius morbi enim nunc faucibus. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet massa vitae tortor condimentum lacinia quis vel eros. Sed enim ut sem viverra. At quis risus sed vulputate
                                 </p>
                                       
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 style="height:50px"></v-flex>    
                    </v-layout>
                    <v-container fluid>

                    <v-layout row  wrap justify-space-around align-center style="margin-bottom:50px;">
                        <v-flex xs12>
                            <p style="text-align:center;" class="display-2">ACHIEVEMENTS</p>
                        </v-flex>
                         <v-flex style="text-align:center;padding-bottom:20px;" xs12 md6 lg3>
                            <v-card style="text-align:center; border-radius:50%; height:300px;width:300px;padding:20px;" class="elevation-4" color="purple lighten-2"> 
                                <v-card-media>
                                    <v-icon size="120">  
                                        mdi-school
                                    </v-icon>
                                </v-card-media>
                                <v-card-text>
                                     <p class="display-3">87</p>
                                    <p class="subheading">schools visited</p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                         
                         <v-flex style="text-align:center;padding-bottom:20px"  xs12 md6 lg3>
                            <v-card style="text-align:center; border-radius:50%; height:300px;width:300px;padding:20px;" class="elevation-4" color="teal darken-2"> 
                                <v-card-media>
                                    <v-icon size="120">  
                                        mdi-human-male-female
                                    </v-icon>
                                </v-card-media>
                                <v-card-text>
                                     <p class="display-3">5250</p>
                                    <p class="subheading">children trained</p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex style="text-align:center;padding-bottom:20px" xs12 md6 lg3>
                            <v-card style="text-align:center; border-radius:50%; height:300px;width:300px;padding:20px;" class="elevation-4" color="red lighten-2"> 
                                <v-card-media>
                                    <v-icon size="120">  
                                        mdi-bank
                                    </v-icon>
                                </v-card-media>
                                <v-card-text>
                                     <p class="display-3">5</p>
                                    <p class="subheading">ICT equipped</p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                       
                          <v-flex style="text-align:center;padding-bottom:20px" xs12 md6 lg3>
                            <v-card style="text-align:center; border-radius:50%; height:300px;width:300px;padding:20px;" class="elevation-4" color="indigo darken-2"> 
                                <v-card-media>
                                    <v-icon size="120">  
                                        mdi-emoticon
                                    </v-icon>
                                </v-card-media>
                                <v-card-text>
                                     <p class="display-3">25</p>
                                    <p class="subheading">proud volunteers</p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    </v-container>
                    <v-parallax
                        dark
                        :src="parallax"
                    >
                        <v-layout
                        align-center
                        column
                        justify-center
                        >
                        <h1 class="display-2 font-weight-thin mb-3">Be a part of our story</h1>
                        <v-btn depressed large color="red lighten-1 white--text">GET INVOLVED</v-btn>
                        </v-layout>
                    </v-parallax>
                </div>
           </v-content>
        </v-app>
        </div>
</template>
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
</style>
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

            ]
        }
    },
}
</script>
