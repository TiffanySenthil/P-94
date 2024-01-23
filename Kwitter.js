function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Kwitter_room.html";

}
const firebaseConfig = {
    apiKey: "AIzaSyDKVaiO0AqIEyMpLGiersSvi5bOZD3Hx8U",
    authDomain: "lets-chat-web-app-c4a32.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-c4a32-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-c4a32",
    storageBucket: "lets-chat-web-app-c4a32.appspot.com",
    messagingSenderId: "852172021665",
    appId: "1:852172021665:web:228f0616a3663ab937b5e0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");