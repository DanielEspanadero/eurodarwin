(()=>{
    window.addEventListener("load", ()=>{
    "use strict"
    
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const form = document.querySelector("#form");
    const parrafo = document.querySelector("#warnings");

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let warnings = "";
        let entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        parrafo.innerHTML = ""
        if(name.value.length < 6){
            warnings += `El nombre no es valido <br>`
            entrar = true
        }
        if(!regexEmail.test(email.value)){
            warnings += `El email no es valido <br>`
            entrar = true
        }
        if(message.value.length < 8){
            warnings += `El mensaje no es valido <br>`
            entrar = true
        }
    
        if(entrar){
            parrafo.innerHTML = warnings
        }else{
            parrafo.innerHTML = "Enviado"
            form.reset();
        }
    })





    });
})();