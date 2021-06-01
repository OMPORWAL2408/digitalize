
var firebaseConfig = {
    apiKey: "AIzaSyC6cERHtApCSoOSfe1TCsynLEJMtanigsU",
    authDomain: "digitalize-9e84c.firebaseapp.com",
    projectId: "digitalize-9e84c",
    storageBucket: "digitalize-9e84c.appspot.com",
    messagingSenderId: "455496388024",
    appId: "1:455496388024:web:ea99c170c12e6aeadf934d",
    measurementId: "G-LT9WNLFQTC"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";

  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;



    } });  }); }
getData();

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
}