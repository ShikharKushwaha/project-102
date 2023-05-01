// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


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

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}