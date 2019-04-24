import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";
import "@mdi/font/css/materialdesignicons.css";

let theme = {
  primary: {
    base: colors.red.lighten1,
    darken1: colors.red.darken2
  },
  secondary: {
    base: colors.cyan.base
  },
  tertiary: {
    base: colors.teal.base
  },
  accent: {
    base: colors.cyan.accent2,
    darken1: colors.cyan.accent3
  }
};

Vue.use(Vuetify, {
  iconfont: "mdi",
  theme,
  lang: {
    
    current: 'en'
  }
});
