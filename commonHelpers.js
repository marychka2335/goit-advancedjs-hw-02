import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function n(){return`#${Math.floor(Math.random()*16777215).toString(16)}`}const t=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let e=0;t.addEventListener("click",()=>{t.disabled=!0,o(),e=setInterval(o,1e3)});r.addEventListener("click",()=>{t.disabled=!1,clearInterval(e)});function o(){document.body.style.backgroundColor=n()}
//# sourceMappingURL=commonHelpers.js.map
