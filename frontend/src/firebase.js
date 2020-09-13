import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDC6Nd8MMpql-vq9sA-759g19SyHp83_Uc",
    authDomain: "clone-2f81f.firebaseapp.com",
    databaseURL: "https://clone-2f81f.firebaseio.com",
    projectId: "clone-2f81f",
    storageBucket: "clone-2f81f.appspot.com",
    messagingSenderId: "491432348546",
    appId: "1:491432348546:web:eef706bba90fe2cf6ddd9b",
    measurementId: "G-WTS2LT0BPB"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  export const db=firebaseApp.firestore()
  export const auth=firebase.auth()
