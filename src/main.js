import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import Vuelidate from 'vuelidate';
import VueMaterial from 'vue-material';
import dateFilter from './filters/date.filter';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueMaterial);

Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyAYaB4Wl_kFV_N4M7TMiHmGdHW8-i6FpzI",
  authDomain: "vue-crm-b6f5e.firebaseapp.com",
  databaseURL: "https://vue-crm-b6f5e.firebaseio.com",
  projectId: "vue-crm-b6f5e",
  storageBucket: "",
  messagingSenderId: "1067677790584",
  appId: "1:1067677790584:web:08d7b934a40d529f"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
});

