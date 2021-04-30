import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import firebase from 'firebase'


let app
var firebaseConfig = {
    apiKey: "AIzaSyD3foTnTHRcQN27FPrRrFvCEDY5WZY6y9I",
    authDomain: "egco427-a7220.firebaseapp.com",
    projectId: "egco427-a7220",
    storageBucket: "egco427-a7220.appspot.com",
    messagingSenderId: "546056382553",
    appId: "1:546056382553:web:db0791419b58d0a95aa948",
    measurementId: "G-HMY0MFRG1W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
firebase.auth().onAuthStateChanged((user)=>{
    if(!app){
        createApp(App).use(router).mount('#app') // => mounted to App.vue by router
    }
})
