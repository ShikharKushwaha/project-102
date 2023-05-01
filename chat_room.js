// Initialize Firebase
var firebaseConfig = {
   apiKey: "AIzaSyDGQgg_fnFmlwnWUEcZso2h1IclpIgJNkk",
   authDomain: "letschat-1ffb5.firebaseapp.com",
   databaseURL: "https://letschat-1ffb5-default-rtdb.firebaseio.com",
   projectId: "letschat-1ffb5",
   storageBucket: "letschat-1ffb5.appspot.com",
   messagingSenderId: "63958688763",
   appId: "1:63958688763:web:a436bc304586b747a7e15e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome " + user_name

function addRoom() {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
      
   });
   localStorage.setItem("room_name", room_name);
   window.location = "chat_room.html"
}


function getData() {
   firebase.database().ref("/").on('value', function (snapshot) {
         document.getElementById("output").innerHTML = "";
         snapshot.forEach(function (childSnapshot) {
               childKey = childSnapshot.key;
               Room_names = childKey;
         //Start code
         console.log("Room Name -" + Room_names);
         row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row;
         //End code
      });
   });
}
getData();

function redirectToRoomName(name) {
   console.log(name);
   localStorage.getItem("room_name", room_name);
   window.location = "letschat_page.html"

}