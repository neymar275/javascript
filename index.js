const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
let firstV = 0;
let secondV = 0;
let output = 0;


function first(e){
     firstV = e.target.value;
     
     
}
function second(e){
    secondV = e.target.value;
}

function outside(e){
    e.preventDefault();
    output = Number(firstV )+ Number(secondV);
    four.textContent = output;
    
    
}


one.addEventListener('input',first);
two.addEventListener('input',second);
three.addEventListener('click',outside);


