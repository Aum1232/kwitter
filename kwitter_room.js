//ADD YOUR FIREBASE LINKS HERE
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
    user_name = localStorage.getItem("username");

    document.getElementById("usernamedisplay").innerHTML = "Welcome " + user_name + "!";
      function Add_Room() {
            roomname = document.getElementById("RoomName").value;
            console.log(roomname);
            firebase.database().ref("/").child(roomname).update({
                  purpose : "AddingUser"
              });
              localStorage.setItem("roomname", roomname);
              window.location = "kwitter_page.html"
}





function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
Room_names = childKey; 
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; }); }); }
getData();

function redirectToRoomName(name) {
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}
function logout() { 
      localStorage.removeItem("username"); 
      localStorage.removeItem("roomname"); 
      window.location = "index.html";
}