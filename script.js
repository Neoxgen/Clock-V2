const hours = document.querySelector('.hour')
const minutes = document.querySelector('.minute')
const seconds = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const themeToggler = document.getElementById('theme-toggler');
const circle = document.querySelector('.circle')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/*---Animation Jour/Nuit---*/ 

themeToggler.addEventListener('click', () => {
    const html = document.querySelector('html')
    themeToggler.classList.toggle('fa-sun')
    if(themeToggler.classList.contains('fa-sun')){
        html.classList.remove('dark');
    }else{
        html.classList.add('dark');
    }
})

/*---Fonctionnement horloge---*/
/*---Affichage date---*/

function clock() {
    let time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hour = time.getHours()
    let h = (time.getHours() % 12) + time.getMinutes() /59;
    let m = time.getMinutes()
    let s = time.getSeconds()
    const ampm = h >= 12 ? 'PM' : 'AM'

    timeEl.innerHTML = `${hour}:${m < 10 ? `0${m}` : m} `
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

    h *= 30; 
    m *= 6;
    s *= 6; 

    rotation(hours, h);
    rotation(minutes, m);
    rotation(seconds, s);

    setTimeout(clock, 500);
}

rotation = (target, val) => {
    target.style.transform =  `rotate(${val}deg)`;
} 

window.onload = clock();

/*---Création de 60 div (60 * 6deg = 360deg)---*/
/*---design des minutes et des secondes---*/ 

function createBar() {
    for(let i = 0; i < 360; i += 6) {
        const rotation = document.createElement('div')
        const border = document.createElement('div')
        rotation.classList.add('rotor-ball')
        border.classList.add('rotor1')
        rotation.style.transform = `rotate(${i}deg)`
        border.style.transform = `rotate(${i + 3}deg)`
        circle.appendChild(rotation)
        circle.appendChild(border)
        rotation.insertAdjacentHTML('afterbegin','<div class="bar"></div>')
        border.insertAdjacentHTML('afterbegin', '<div class="border"></div>')
    }
}

createBar ()

/*---Création de 12 div (12 * 30deg = 360deg)---*/
/*---design des chiffres et des chiffres romains---*/

function createRedBar () {
    for(let j = 0; j < 360; j += 30) {
        const rotation = document.createElement('div')
        const number = document.createElement('div')
        rotation.classList.add('rotor-ball')
        number.classList.add('rotor1')
        rotation.style.transform = `rotate(${j}deg)`
        number.style.transform = `rotate(${j}deg)`
        circle.appendChild(rotation)
        circle.appendChild(number)
        rotation.insertAdjacentHTML('afterbegin','<div class="numX"></div>')
        number.insertAdjacentHTML('afterbegin', '<div class="num"></div>')
    }
}

createRedBar()

/*---Affichage et orientation des chiffres (n) et (x) ---*/
/*---Mise à l'endroit du chiffre "VI" (idx == 6)---*/

const numberNum = document.querySelectorAll('.num')
const numberNumX = document.querySelectorAll('.numX')
const x = ['XII','|','|','III','|','|','VI','|','|','IX','|','|']
const n = [60,5,10,15,20,25,30,35,40,45,50,55];
const rN = [0,30,60,90,120,150,180,210,240,270,300,330,360]

function writeNumber () {
    numberNum.forEach((num,idx) => {
        num.textContent = n[idx];
        num.style.transform = `rotate(${-rN[idx]}deg)`
        })
    numberNumX.forEach((numX,idx) => {
            numX.textContent = x[idx];
            console.log(numX,(idx==6));
            if((numX,(idx==6)) === true) {
                numX.style.transform = 'rotate(180deg)'
            }
        })
}

writeNumber()






















/*

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)
*/