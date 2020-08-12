import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCDjefyiRP7pzaqPONimv1ioSgul_32Y34",
    authDomain: "softuni-exam.firebaseapp.com",
    databaseURL: "https://softuni-exam.firebaseio.com",
    projectId: "softuni-exam",
    storageBucket: "softuni-exam.appspot.com",
    messagingSenderId: "796661471700",
    appId: "1:796661471700:web:817b7659a2b461aa791e41"
};
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);

export default db