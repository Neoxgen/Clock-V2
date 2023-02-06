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
    let hr = (time.getHours() % 12) + time.getMinutes() / 60;
    let min = time.getMinutes() + time.getSeconds() / 60
    let m = Math.floor(time.getMinutes() + time.getSeconds() / 60)
    let s =  time.getSeconds() 
    const ampm = hr >= 12 ? 'PM' : 'AM'
    

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

    hr *= 30; 
    min *= 6;
    s *= 6; 

    rotation(hours, hr);
    rotation(minutes, min);
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
const X = ['XII','|','|','III','|','|','VI','|','|','IX','|','|']
const n = [60,5,10,15,20,25,30,35,40,45,50,55];
const rN = [0,30,60,90,120,150,180,210,240,270,300,330,360]

function writeNumber () {
    numberNum.forEach((num,idx) => {
        num.textContent = n[idx];
        num.style.transform = `rotate(${-rN[idx]}deg)`
        })
    numberNumX.forEach((numX,idx) => {
            numX.textContent = X[idx];
            if((numX,(idx==6)) === true) {
                numX.style.transform = 'rotate(180deg)'
            }
        })
}

writeNumber()

/*--Premier canvas(Background en opacité réduite--*/

let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let O = 0.2  //opacity
let x = 250  //point de départ x
let y = 10   //point de départ y
let e = 10   //épaisseur
let L = 40   //Largeur
let H = 30   //Hauteur
let dx = 2   //décalage x
let dy = 2*dx  //décalage y


/*--Barre du haut (Top0 = T0) */

function drawT0 () {
    ctx.beginPath();
    ctx.moveTo(x, y);          //(240,10)
    ctx.lineTo((x-L), y);      //(190,10)
    ctx.lineTo((x-L)+e,(y+e)); //(196,16)
    ctx.lineTo((x-e),(y+e));   //(234,16)
    ctx.fillStyle= `rgba(255, 0, 0, ${O})`; 
    ctx.fill();
}

/*--Barre de droite en haut (Right-Top1 = RT1) */

function drawRT1 () {
    ctx.beginPath();
    ctx.moveTo((x+dx),(y+dy));                 //(241,12)
    ctx.lineTo((x+dx),(y+dy)+H);               //(241,60)
    ctx.lineTo((x+dx)-(e/2),((y+dy)+H)+(e/2)); //(238,63)
    ctx.lineTo((x+dx)-e,(y+dy)+H);             //(235,60)
    ctx.lineTo((x+dx)-e,(y+dy)+e);             //(235,18)
    ctx.fillStyle= `rgba(255, 0, 0, ${O})`;
    ctx.fill();
}

/*--Barre de droite en bas (Right-Bottom2 = RB2) */

function drawRB2 () {
    ctx.beginPath();
    ctx.moveTo((x+dx)-(e/2),(y+dy)+(H+(e/2)+dy));         //(238,65)
    ctx.lineTo((x+dx),(y+dy)+(H+(e/2)+dy+(e/2)));         //(241,68)
    ctx.lineTo((x+dx),(y+dy)+(H+(e/2)+dy+(e/2))+H);       //(241,116)
    ctx.lineTo((x+dx)-e,(y+dy)+(H+(e/2)+dy+(e/2))+(H-e)); //(235,110)
    ctx.lineTo((x+dx)-e,(y+dy)+(H+(e/2)+dy+(e/2)))        //(235,68)
    ctx.fillStyle= `rgba(255, 0, 0, ${O})`;
    ctx.fill();
}

/*--Barre du Bas (Bottom3 = B3) */

function drawB3 () {
    ctx.beginPath();
    ctx.moveTo(x,(y+dy)+(H+(e/2)+dy+(e/2))+H+dy);         //(240,118)
    ctx.lineTo((x-L),(y+dy)+(H+(e/2)+dy+(e/2))+H+dy);     //(190,118)
    ctx.lineTo((x-L)+e,(y+dy)+(H+(e/2)+dy+(e/2))+H+dy-e); //(196,112)
    ctx.lineTo((x-e),(y+dy)+(H+(e/2)+dy+(e/2))+H+dy-e);   //(234,112)
    ctx.fillStyle= `rgba(255, 0, 0, ${O})`;
    ctx.fill();
}

/*--Barre de gauche en bas (Left-Bottom4 = LB4) */

function drawLB4 () {
    ctx.beginPath();
    ctx.moveTo((x-L)-dx+(e/2),(y+dy)+(H+(e/2)+dy));         //(192,65)
    ctx.lineTo((x-L)-dx+e,(y+dy)+(H+(e/2)+dy+(e/2)));       //(195,68)
    ctx.lineTo((x-L)-dx+e,(y+dy)+(H+(e/2)+dy+(e/2))+(H-e)); //(195,110)
    ctx.lineTo((x-L)-dx,(y+dy)+(H+(e/2)+dy+(e/2))+H);       //(189,116)
    ctx.lineTo((x-L)-dx,(y+dy)+(H+(e/2)+dy+(e/2)));         //(189,68)
    ctx.fillStyle= `rgba(255, 0, 0, ${O})`;
    ctx.fill();
}

/*--Barre de gauche en haut (Left-Top5 = LT5) */

function drawLT5 () {
    ctx.beginPath();
    ctx.moveTo((x-L)-dx,(y+dy)); //(189,12)
    ctx.lineTo((x-L)-dx,(y+dy)+H); //(189,60)
    ctx.lineTo((x-L)-dx+(e/2),((y+dy)+H)+(e/2)); //(192,63)
    ctx.lineTo((x-L)-dx+e,(y+dy)+H); //(195,60)
    ctx.lineTo((x-L)-dx+e,(y+dy)+e); //(195,18)
    ctx.fillStyle= `rgba(255, 0, 0, ${O})`;
    ctx.fill();
}

/*--Barre de milieu (Center6 = C6) */

function drawC6 () {
    ctx.beginPath();
    ctx.moveTo((x+dx)-(e/2)-(2*dx),((y+dy)+H)+(e/2)+(dy/2));               //(236,64)
    ctx.lineTo((x+dx)-(e/2)-(2*dx)-(e/2),((y+dy)+H)+(e/2)+(dy/2)+(e/2));   //(233,67)
    ctx.lineTo((x-L)-dx+(e/2)+(2*dx)+(e/2),((y+dy)+H)+(e/2)+(dy/2)+(e/2)); //(197,67)
    ctx.lineTo((x-L)-dx+(e/2)+(2*dx),((y+dy)+H)+(e/2)+(dy/2));             //(194,64)
    ctx.lineTo((x-L)-dx+(e/2)+(2*dx)+(e/2),((y+dy)+H)+(e/2)+(dy/2)-(e/2)); //(197,61)
    ctx.lineTo((x+dx)-(e/2)-(2*dx)-(e/2),((y+dy)+H)+(e/2)+(dy/2)-(e/2));   //(233,61)
    ctx.fillStyle= `rgba(255, 0, 0, ${O})`;
    ctx.fill();
}

/*--Séparation deux points ( : 0 ) */

function drawTwoMarks () {
    ctx.beginPath();
    ctx.arc(135, 35, 6, 0, 2 * Math.PI);
    ctx.arc(135, 65, 6, 0, 2 * Math.PI);
    ctx.fillStyle= `rgba(255, 0, 0, ${O})`;
    ctx.fill();
}

/*--Ecriture d'un nombre en digital-- */

function drawNumber () {
    drawT0();
    drawRT1();
    drawRB2();
    drawB3();
    drawLB4();
    drawLT5();
    drawC6();
}

/*--Positionnement des 4 nombres sur le canvas--*/

function numberOne () {
    x= 250
    drawNumber ()
}

function numberTwo () {
    x = 190
    drawNumber()
}

function numberThree () {
    x= 120
    drawNumber()
}

function numberFour () {
    x = 60
    drawNumber()
}

/*--Réalisation du background (nombre + séparation)--*/

function backgroundNumber () {
    numberOne();
    numberTwo();
    drawTwoMarks();
    numberThree();
    numberFour();
}

backgroundNumber()

/*--Deuxième canvas (écriture de l'heure)--*/

let canvas2 = document.getElementById('c2');
let ctx2 = canvas2.getContext('2d');
let now = new Date()
let hour = now.getHours()
let minute = now.getMinutes()
Numbers = [Zero,One,Two,Three,Four,Five,Six,Seven,Eight,Nine]

/*--Ecriture du chiffre "Zéro"--*/

function Zero () {
    O=1
    drawT0 ();
    drawRT1 ();
    drawRB2 ();
    drawB3 ();
    drawLB4 ();
    drawLT5 ();
}

/*--Ecriture du chiffre "One"--*/

function One () {
    O=1
    drawRT1 ();
    drawRB2 ();
}

/*--Ecriture du chiffre "Two"--*/

function Two () {
    O=1
    drawT0 ();
    drawRT1 ();
    drawC6 ();
    drawLB4 ();
    drawB3 ();
}

/*--Ecriture du chiffre "Three"--*/

function Three () {
    O=1
    drawT0 ();
    drawRT1 ();
    drawC6 ();
    drawRB2 ();
    drawB3 ();
}

/*--Ecriture du chiffre "Four"--*/

function Four () {
    O=1
    drawLT5 ();
    drawRT1 ();
    drawC6 ();
    drawRB2 ();
}

/*--Ecriture du chiffre "Five"--*/

function Five () {
    O=1
    drawT0 ();
    drawLT5 ();
    drawC6 ();
    drawRB2 ();
    drawB3 ();
}

/*--Ecriture du chiffre "Six"--*/

function Six () {
    O=1
    drawT0 ();
    drawLT5 ();
    drawC6 ();
    drawRB2 ();
    drawB3 ();
    drawLB4();
}

/*--Ecriture du chiffre "Seven"--*/

function Seven () {
  O=1
  drawRT1 ();
  drawRB2 ();
}

/*--Ecriture du chiffre "Eight"--*/

function Eight () {
  O=1
  drawT0 ();
  drawRT1 ();
  drawRB2 ();
  drawB3 ();
  drawLB4 ();
  drawLT5 ();
  drawC6 ();
}

/*--Ecriture du chiffre "Nine"--*/

function Nine () {
  O=1
  drawT0 ();
  drawRT1 ();
  drawRB2 ();
  drawB3 ();
  drawLT5 ();
  drawC6 ();
}

/*--Affichage des heures--*/

function writeHour() {
  let units = hour % 10
  let tens = (hour - (hour % 10)) / 10
  x = 60
  Numbers[tens]()
  x = 120
  Numbers[units]()
}
writeHour()

/*--Affichage des minutes--*/

function writeMinute() {
  let units = minute % 10
  let tens = (minute - (minute % 10)) / 10
  x = 190
  Numbers[tens]()
  x = 250
  Numbers[units]()
}
writeMinute()























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