(()=>{
window.addEventListener("load", ()=>{
"use strict"

    const footerText = document.querySelector("#copyright");

    const year = new Date().getFullYear()

    footerText.innerHTML=`Desarrollado por <a href="https://daniel-espanadero.com/" target="_BLANK">Daniel Españadero</a> &copy ${year}`
    
});
})();