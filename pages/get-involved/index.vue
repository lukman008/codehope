<template>
  <div class="about">
    <v-layout row wrap>
      <v-flex xs12>
        <v-parallax dark height="500" :src="mny">
          <v-layout align-center column justify-center>
            <h1 class="display-3 font-weight-bold mb-5">Get Invloved</h1>
            <h4
              class
              style="font-size: 40px; font-weight: 400"
            >Suuport Our work in any of the way that fits you!</h4>
          </v-layout>
        </v-parallax>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap>
          <v-container grid-list-lg>
            <v-layout row wrap>

              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs12 md6 order-xs1 order-md2>
                    <v-img :src="`${ help_us.icon }`"></v-img>
                  </v-flex>
                  <v-flex xs12 md6 order-xs2 order-md1>
                    <h3 v-html="`${help_us.title}`" class="display-1 pb-3"></h3>
                    <p v-html="`${help_us.description }`"></p>
                    <v-btn target="_blank" color="orange" :href="`${ help_us.url }`" outline>Reach Out</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs12 md6 order-xs2>
                    <h3 v-html="`${monthly_one_off.title}`" class="display-1 pb-3"></h3>
                    <p v-html="`${monthly_one_off.description }`"></p>
                    <v-btn target="_blank" color="orange" :href="`${ monthly_one_off.url }`" outline>Reach Out</v-btn>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-img :src="`${ monthly_one_off.icon }`"></v-img>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex>
                <v-layout row wrap>
                  <v-flex xs12 md6 order-md2>
                    <v-img :src="`${ sponsor.icon }`"></v-img>
                  </v-flex>
                  <v-flex xs12 md6 order-md1>
                    <h3 v-html="`${sponsor.title}`" class="display-1 pb-3"></h3>
                    <p v-html="`${sponsor.description }`"></p>
                    <v-btn target="_blank" color="orange" :href="`${ sponsor.url }`" outline>Reach Out</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex>
                <v-layout row wrap>
                  <v-flex xs12 md6 order-xs2>
                    <h3 v-html="`${internship.title}`" class="display-1 pb-3"></h3>
                    <p v-html="`${internship.description }`"></p>
                    <v-btn target="_blank" color="orange" :href="`${ internship.url }`" outline>Reach Out</v-btn>
                  </v-flex>
                  <v-flex xs12 md6 order-xs1>
                    <v-img :src="`${ internship.icon }`"></v-img>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex>
                <v-layout row wrap>
                  <v-flex xs12 md6 order-md2>
                    <v-img :src="`${ ment_vol.icon }`"></v-img>
                  </v-flex>
                  <v-flex xs12 md6 order-md1>
                    <h3 v-html="`${ment_vol.title}`" class="display-1 pb-3"></h3>
                    <p v-html="`${ment_vol.description }`"></p>
                    <v-btn target="_blank" color="orange" :href="`${ ment_vol.url }`" outline>Reach Out</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex>
                <v-layout row wrap>
                  <v-flex xs12 md6 order-xs2>
                    <h3 v-html="`${op_vol.title}`" class="display-1 pb-3"></h3>
                    <p v-html="`${op_vol.description }`"></p>
                    <v-btn target="_blank" color="orange" :href="`${ op_vol.url }`" outline>Reach Out</v-btn>
                  </v-flex>
                  <v-flex xs12 md6 order-xs1>
                    <v-img :src="`${ op_vol.icon }`"></v-img>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex>
                <v-layout row wrap>
                  <v-flex xs12 md6 order-md2>
                    <v-img :src="`${ field_vol.icon }`"></v-img>
                  </v-flex>
                  <v-flex xs12 md6 order-md1>
                    <h3 v-html="`${field_vol.title}`" class="display-1 pb-3"></h3>
                    <p v-html="`${field_vol.description }`"></p>
                    <v-btn target="_blank" color="orange" :href="`${ field_vol.url }`" outline>Reach Out</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>

              
            </v-layout>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import inv from "@/assets/inv.png";
import int from "@/assets/int.png";
import ment from "@/assets/ment.png";
import opr from "@/assets/opr.png";
import mny from "@/assets/mny.png";
import eqs from "@/assets/eqs.png";
import fld from "@/assets/programmer.svg";

export default {
  data() {
    return {
      inv,
      int,
      ment,
      opr,
      mny,
      eqs,
      fld,
      help_us: {
        title: `Help us equip a school`,
        icon: eqs,
        url:
          "mailto:hello@thecodehope.org?subject=MENTOR VOLUNTEER&body=Hi, I'm . . . \n I want to donate . . .",
        description: `Our vision is to reach as many schools in rural communities as possible, equipping them with computer labs and also to providing standby trainers to teach from time to time. You can support our work by helping us facilitate the
          establishment of a lab in a school(of your choice). This 	could be by donating some or all of the equipments needed.
          <ul dir="ltr">
          
        <li>	Computers. We provide an average of 35 computers for schools we have worked with. Computers could be either desktop or laptops. </li>
        <li>	Power Source. The Lab is usually equipped with a standby Generator capable of powering the PCs. In Situations where we have the funds, we equip schools with renewable energy sources (Solar Powered Inverters). </li>
        <li>	Internet Access. It is important the labs have access to the internet. We sometimes provide this using modems and routers.</li>
        <li>	Furniture. While this is provided most times by the school, there are situations where this is not available in the school. We thus Mae efforts to provide them. </li>
          <li>	Others. Other depend on the facilities already available in the school and will be highlighted once you have shown interest. </li>
          </ul>
          `
      },
      monthly_one_off: {
        title: "Monthly/one-off Donations",
          icon: mny,
          url: "http://paystack.com/pay/er45tgv",
          description: `We believe little drops make an ocean. <br>Our expenses include monthly stipends to cover the logistics of our volunteers, Operation expenses for each of the schools where the labs are located (which could include petrol(for setups without solar systems), internet access etc.) and establishment of labs in more schools.  You could sign up to our monthly contribution plan and contribute as low as #1000 monthly or one time donations to help us achieve our goals.`

      },
      sponsor: {
        title: "Sponsor a Volunteer",
          icon: fld,
          url: "http://paystack.com/pay/er45tgv",
          description: `Our approach goes beyond donating computers to schools as we have discovered that the computers end up not being used when there is no trainer. We provide the schools with volunteer trainers who ensures the kids are taught with the training time table merged together with the school timetable. You can support our work by covering the stipends we pay the volunteer trainers to cover their logistics and related expenses.`
      },
      internship: {
        title: "Internship Heroes",
          description: `For our projects involving youths and Women, we believe internship opportunities gives them the chance to put their skills to use and become even better at it.<br> We also believe it sets them up for gainful future employments and motivates their peers, You can help us facilitate internship opportunities for our trainees in your organization or other organizations you have relationship with.`,
          icon: int,
          url:
            "mailto:hello@thecodehope.org?subject=INTERNSHIP HERO&body=Hi, I'm . . . \n I have internship positions available for . . "
      },
      ment_vol: {
        title: "Mentor Volunteers",
          icon: ment,
          url:
            "mailto:hello@thecodehope.org?subject=MENTOR VOLUNTEER&body=Hi, I'm . . . \n I want to mentor your beneficiaries",
          description: `You could also volunteer as a mentor, helping us provide needed guidance for our project participants especially youths or women. We believe your contribution to their development could help them maximize their potentials.`
      },
      op_vol: {
        title: "Operations Volunteer",
          icon: opr,
          url:
            "mailto:hello@thecodehope.org?subject=OPERATIONS VOLUNTEER&body=Hi, I'm . . . \n I want to help out with your cause. \n I can . . .",
          description: `Our projects usually require a number of volunteers around operations. From Managing our social media pages, writing blog posts/ Press releases for our events, to coming up with engaging fliers(graphics design) for our events, there are several ways you could support our vision`
      },
      field_vol: {
        title: "Field Volunteers",
          icon: fld,
          url:
            "mailto:hello@thecodehope.org?subject=FIELD VOLUNTEER&body=Hi, I'm . . . \n I want to volunter as a trainer in . . .",
          description: `Join us as a field volunteer. Our field volunteers serve as trainers for our projects. We accept field volunteers for both our long term (You can select a particular project in a location close to you) and one off training programs. Field volunteers are generally required to be skilled in either of the following; web development, Mobile Apps development, Embedded systems/robotics, Games development and Basic Computing. Does this sound like you? `
      },
    };
  }
};
</script>

<style>
.dummy-bg--wrapper {
  height: 60vh;
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
</style>

