import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyCricWTjCA42n-u0EnQ_zwrdqrG76zge0I",
    authDomain: "netninja-pangeaian.firebaseapp.com",
    projectId: "netninja-pangeaian",
    storageBucket: "netninja-pangeaian.appspot.com",
    messagingSenderId: "821915286740",
    appId: "1:821915286740:web:09bb091cced1ca47694f41",
    measurementId: "G-VWS7QTZFZH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  // firebase.firestore().settings({timestampsInSnapshots: true});


  export default firebase;