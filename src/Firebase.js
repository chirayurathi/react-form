import firebase from 'firebase'
import 'firebase/storage'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCclq_Do-yJPl635mqLFGgvKSdpgKEP70M",
    authDomain: "esowcarpet.firebaseapp.com",
    projectId: "esowcarpet",
    storageBucket: "esowcarpet.appspot.com",
    messagingSenderId: "23667430330",
    appId: "1:23667430330:web:8239c4d4c523c83c328383"
  };

  firebase.initializeApp(firebaseConfig);
  let storage = firebase.storage()
  export default{
    firebase,storage
  }