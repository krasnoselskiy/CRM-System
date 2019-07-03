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
  apiKey: "AIzaSyAEnHPe3piAM4jyoUjh42skPnuF1VS0ZUs",
  authDomain: "vue-crm-92eff.firebaseapp.com",
  databaseURL: "https://vue-crm-92eff.firebaseio.com",
  projectId: "vue-crm-92eff",
  storageBucket: "",
  messagingSenderId: "992430669455",
  appId: "1:992430669455:web:6ea74e751d870dcc"
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

