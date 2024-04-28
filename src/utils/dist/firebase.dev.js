"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var _app = require("firebase/app");

var _analytics = require("firebase/analytics");

var _auth = require("firebase/auth");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCp5HMX980wsO2i3183ofU9FmvsGxzF7L0",
  authDomain: "netflix-gpt-91f19.firebaseapp.com",
  projectId: "netflix-gpt-91f19",
  storageBucket: "netflix-gpt-91f19.appspot.com",
  messagingSenderId: "240959265709",
  appId: "1:240959265709:web:9ba49c1df2017a2a3b9f24",
  measurementId: "G-CBGW8D8B2H"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var analytics = (0, _analytics.getAnalytics)(app);
var auth = (0, _auth.getAuth)();
exports.auth = auth;