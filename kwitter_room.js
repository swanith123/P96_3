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

function addRoom(){
    roomname=document.getElementById("add_room").value;
    firebase.database().ref("/").child(roomname).update({
          purpose: "adding roomname"
    });
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + roomname);
row="<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ roomname+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
  }