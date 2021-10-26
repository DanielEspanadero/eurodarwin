(()=>{
window.addEventListener("load", ()=>{
"use strict"    
    const nav = ()=>{
        const navPhone = document.querySelector(".nav-phone");
        const tools = document.querySelector("#tools-nav");
    
        tools.addEventListener("click", ()=>{
            if (window.innerWidth < 768) {
                navPhone.classList.toggle("nav-phone");
            } else {
                navPhone.classList.remove("nav-phone");
            };
        });
    };
    nav()
});
})();
