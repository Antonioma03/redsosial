function inisiar(){
    nombreusuario=document.getElementById("nombreusuario").value;
localStorage.setItem("nombreusuario",nombreusuario);
window.location="pantalla2.html"
}   