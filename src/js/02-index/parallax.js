(()=>{
    window.addEventListener("load", ()=>{
    "use strict"

    const parallax = document.querySelector("#reform-background1");
    let scrollTop = document.documentElement.scrollTop;
    
    function scrollParallax(){
        if(scrollY > 1443){
            scrolly=0;
        parallax.style.transform = "translateY(" + scrollY + -0.5 + "px)";
        };
    };
    

    console.log(window.scrollY)

    window.addEventListener("scroll", scrollParallax);
    });
})();