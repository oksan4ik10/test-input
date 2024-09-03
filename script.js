const input = document.querySelector("input")
const span = document.querySelector('span');
const card = document.querySelector('.card')

input.addEventListener("focus", (e)=> {
    const heightViewport = window.visualViewport.height;
    const heightDevice = window.screen.height;
    span.textContent=`Viewport: ${heightViewport}, device: ${heightDevice}`
})