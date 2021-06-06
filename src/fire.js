import firebase from 'firebase';
// import firebase from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxICGNLFkMcChx8YNkqeH8xgOk4QSWDMA",
    authDomain: "flist-aec17.firebaseapp.com",
    databaseURL: "https://flist-aec17-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "flist-aec17",
    storageBucket: "flist-aec17.appspot.com",
    messagingSenderId: "530922107935",
    appId: "1:530922107935:web:28e0bbf6edd2151df7d12a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;