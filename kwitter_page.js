//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAOvzlXdhrvFmozFrBWLv91PI3ZNmZdhAg",
      authDomain: "kwitter-d3436.firebaseapp.com",
      databaseURL: "https://kwitter-d3436-default-rtdb.firebaseio.com",
      projectId: "kwitter-d3436",
      storageBucket: "kwitter-d3436.appspot.com",
      messagingSenderId: "1015906422561",
      appId: "1:1015906422561:web:4f3ec9faa37f6d2822b860"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");
    roomname = localStorage.getItem("roomname");
    function Send() {
          message = document.getElementById("message").value;
          firebase.database().ref(roomname).push({
            name:username,
            message:message,
            likes:0
          });
          document.getElementById("message").value = "";
    }
    function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
          firebase_message_id = childKey; message_data = childData;
          name = message_data['name']; 
          message = message_data['message']; 
          like = message_data['likes'];
          console.log(name);
          console.log(message_data);
          console.log(message);
          name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; 
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
          like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; 
          row = name_with_tag + message_with_tag +like_button + span_with_tag; 
          document.getElementById("output").innerHTML += row;

      } }); }); }
getData();
function updateLike(message_id) { console.log("clicked on like button - " + message_id); 
button_id = message_id; 
likes = document.getElementById(button_id).value; 
updated_likes = Number(likes) + 1; 
console.log(updated_likes); 
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); } 

function logout() { localStorage.removeItem("username"); 
localStorage.removeItem("roomname"); 
window.location.replace("index.html"); }