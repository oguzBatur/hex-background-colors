const btn = document.getElementById('btn');
const body = document.getElementsByTagName('body')[0];
const span = document.getElementsByTagName('span')[0];
const hexValue = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];



const changeColor = ()=>{
    let hexNumber = '#';

    for(var i = 0; i < 6; i++){
        hexNumber += hexValue[Math.floor(Math.random() * hexValue.length )];
    }
    body.style.backgroundColor = hexNumber;
    span.textContent = hexNumber;
}
btn.addEventListener('click', changeColor)
