
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBVxx_Fr5j0CweUUMMX0LX0cObGrOdhKhA",
      authDomain: "class-test-c1793.firebaseapp.com",
      databaseURL: "https://class-test-c1793-default-rtdb.firebaseio.com",
      projectId: "class-test-c1793",
      storageBucket: "class-test-c1793.appspot.com",
      messagingSenderId: "1082877775595",
      appId: "1:1082877775595:web:002f70a5d235ec268ab8ae"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
