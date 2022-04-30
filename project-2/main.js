let increse=document.getElementById('btn1');
let reset=document.getElementById('btn2');
let decrese=document.getElementById('btn3');
let text=document.getElementById('text')
const counter=0;
increse.addEventListener('click',function (event) {
    counter += 1;
    text.innerHTML=counter;
    
})
reset.addEventListener('click',function (event) {
    counter = 0;
    text.innerHTML=counter;
    
})
decrese.addEventListener('click',function (event) {
    counter -= 1;
    text.innerHTML=counter;
    
})