const input = document.querySelector("input")
const span = document.querySelector('span');
const card = document.querySelector('.card')
const p = document.querySelector('p')


let a = false;
const t = ()=> {
  
        const heightViewport = window.visualViewport.height;
        const heightDevice = window.screen.height;
        const top = window.visualViewport.offsetTop;
        const text = `Viewport: ${heightViewport}, device: ${heightDevice} top: ${top}`
        span.textContent=text;
        if(!a){
            p.textContent = text;
            a=true;
        }
    
}
input.addEventListener("focus", t)