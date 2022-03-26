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

  nombreusuario=localStorage.getItem("nombreusuario");
  nombresala=localStorage.getItem("nombresala");
  document.getElementById("salaactual").innerHTML="viembenido a la sala #"+nombresala+"😀";
function salir(){
    localStorage.removeItem("nombreusuario");
    localStorage.removeItem("nombresala");
    window.location="index.html";
}
function embiarmensaje(){
    mensaje=document.getElementById("mensaje").value;
    firebase.database().ref(nombresala).push({
usuario:nombreusuario,
mensajeembiado:mensaje,
like:0
    });
    document.getElementById("mensaje").value=""; 
}
function leerdatos(){
    firebase.database().ref("/"+nombresala).on('value', function(snapshot){ 
        document.getElementById("salascreadas").innerHTML="";
        snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key; 
            childData = childSnapshot.val();
            if(childKey != "objetibo") {
                id_mensaje= childKey;
                datos_mensaje= childData;
                usuario=datos_mensaje['usuario'];
                mensajeembiado=datos_mensaje['mensajeembiado'];
                 like=datos_mensaje['like'];
                 linea_nombre = "<h3 id='linea_nombre'> "+ usuario +"✔️<img id='icono_check' src='check.png'> </h3>";
                 linea_msj = "<h3 id='mensaje_enviado'>" + mensajeembiado + "</h3>"; 
                 boton_like ="<button class='btn btn-primary' id="+ id_mensaje +" value= "+ like +" onclick='leer_like(this.id)'>";
                 linea_likes = "<h4 <span> 👍 Like: "+ like +"</span> </button> <hr></h4>";
                 fila=linea_nombre+linea_msj+boton_like+linea_likes;
                 document.getElementById("salascreadas").innerHTML +=fila; 
            }  
});
});
}
leerdatos(); 
function leer_like(id_like){
    boton_shek=id_like;
likes=document.getElementById(boton_shek).value;
conteolikes=Number(likes)+1;
firebase.database().ref(nombresala).child(id_like).update({like:conteolikes});

}