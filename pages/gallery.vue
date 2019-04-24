<template>
  <v-layout row wrap>
      
    <v-flex v-for="n in 84"
      :key="n" xs6 md4 lg3>
      <v-card color="transparent" hover>
        <v-img
          class="white--text"
          
          :src="`/img/CODEHOPE-${n}.jpg`"
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
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
let images = [];
// for(var i = 1; i < 87;i++){
//     import img from `@/assets/img/CODE-HOPE-${i}.jpg`
//     images.push(img)
// }
export default {
    data() {
        return {
            images
        }
    },

    mounted(){
        
    }
}
</script>
