const firebaseConfig = {
    apiKey: "AIzaSyBd6ujDYZbrDMaJtexZyarw2FlxuGPftdI",
    authDomain: "redsosial-30fe7.firebaseapp.com",
    databaseURL: "https://redsosial-30fe7-default-rtdb.firebaseio.com",
    projectId: "redsosial-30fe7",
    storageBucket: "redsosial-30fe7.appspot.com",
    messagingSenderId: "564483071963",
    appId: "1:564483071963:web:8063dbb8f10d422d9291fe"
  };
  firebase.initializeApp(firebaseConfig);
  function agregar(){
      nombresala=document.getElementById("nombresala").value;
      firebase.database().ref("/").child(nombresala).update({
          Objetibo:"agregar nombre de la sala"
      });
      localStorage.setItem("nombresala",nombresala);
      window.location="pantalla3.html";
  }

  nombreusuario=localStorage.getItem("nombreusuario");
  document.getElementById("hola").innerHTML="viembenido  "+nombreusuario+"😀";
  function leerbase(){
    firebase.database().ref("/").on('value', function(snapshot){ 
        document.getElementById("salida").innerHTML="";
        snapshot.forEach(function(childSnapshot){
        datos=childSnapshot.key;
        salas=datos;
        fila="<div class='nombresala' id="+salas+" onclick='ir_a_sala(this.id)' >#"+ salas +"</div><hr>";
        document.getElementById("salida").innerHTML+=fila;
    });
});
  }
  leerbase();
  function ir_a_sala(name){
      localStorage.setItem("nombresala",name);
      window.location="pantalla3.html";
  }
  function salir(){
      localStorage.removeItem("nombreusuario");
      localStorage.removeItem("nombresala");
      window.location="index.html";
  }
  