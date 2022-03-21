var firebaseConfig = {
    apiKey: "AIzaSyBoztKg2WeA4wwL8rW0gK4aPxk1G08-hok",
    authDomain: "kwitter-f5a0f.firebaseapp.com",
    databaseURL: "https://kwitter-f5a0f-default-rtdb.firebaseio.com",
    projectId: "kwitter-f5a0f",
    storageBucket: "kwitter-f5a0f.appspot.com",
    messagingSenderId: "844138308685",
    appId: "1:844138308685:web:3d8625ef8d52852e782804"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
username= localStorage.getItem("username");
room_name=localStorage.getItem("roomname");

function send()
{
 msg=document.getElementById("message").value;
 firebase.database().ref(room_name).push({
       name:username,message:msg,like:0
 });
 document.getElementById("message").value="";


}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log("roomname-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

      document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("roomname",name);
    window.location="kwitter_page.html";
}