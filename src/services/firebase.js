

import Firebase from "firebase/app";
import "firebase/firestore";


  const config = {
    apiKey: "AIzaSyA3ft2HjR8O3dh8FAA8ry6y0CtuHznGzCs",
    authDomain: "beautifolio-d4331.firebaseapp.com",
    projectId: "beautifolio-d4331",
    storageBucket: "beautifolio-d4331.appspot.com",
    messagingSenderId: "275614612763",
    appId: "1:275614612763:web:f277f76a31b188c54d67be",
    measurementId: "G-B40XPTZ9J7"
  };
  // Initialize Firebase
  const firebase = Firebase.initializeApp(config);
   const { FieldValue } = Firebase.firestore;

export {firebase,FieldValue}
