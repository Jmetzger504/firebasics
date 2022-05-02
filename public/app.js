//Initializes firebase and links our firebase project's SDK to this application.
const firebaseConfig = {
    apiKey: "AIzaSyBiJnAh7T323rJsZbQBPaBO9TLfWkNBR_o",
    authDomain: "my-first-project-98472.firebaseapp.com",
    projectId: "my-first-project-98472",
    storageBucket: "my-first-project-98472.appspot.com",
    messagingSenderId: "942088880708",
    appId: "1:942088880708:web:88548bb463b1eb7a207211",
    measurementId: "G-1PCKWJXZNQ"
  };



 firebase.initializeApp(firebaseConfig)

 console.log(firebase);