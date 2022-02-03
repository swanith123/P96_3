var firebaseConfig = {
    apiKey: "AIzaSyATe7BXR_p1LZSmit7ZCAbkcz6iJvd2L2I",
    authDomain: "kwitter-web-app-77c25.firebaseapp.com",
    projectId: "kwitter-web-app-77c25",
    storageBucket: "kwitter-web-app-77c25.appspot.com",
    messagingSenderId: "462298980862",
    appId: "1:462298980862:web:e9d49da4d50ce5881720af",
    measurementId: "G-GQPD5V9DPL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
window.location="kwitter_room.html";
}