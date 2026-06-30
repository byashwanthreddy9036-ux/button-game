const button = document.getElementById('Button')
const counter = document.getElementById('Count')
const div = document.getElementById('div')
let count = 0
counter.innerText = 0
const hoverFunctionality = () => {
    const x = Math.floor(Math.random() * 250)
    const y = Math.floor(Math.random() * 350)
    if (x % 2 == 0) {
        button.style.left = String(x) +"px";
    }else{
        button.style.right = String(x) +"px";
    }
    if(y%2==0){
        button.style.top = String(x) +"px";
    }else{
        button.style.bottom = String(x) +"px";
    }
}

const clickFunctionality = () => {
    count = 0
    setTimeout(() => {
        button.innerText='Click me'
        button.addEventListener('click', clickFunctionality)
    }, 3000);
    button.innerText='You Win'
    button.removeEventListener('click', clickFunctionality)
}

const missCounter = () =>{
    count++
    counter.innerText=count
}

button.addEventListener('mouseenter', hoverFunctionality)
button.addEventListener('mouseover', hoverFunctionality)
button.addEventListener('click', clickFunctionality)
div.addEventListener('click', missCounter)