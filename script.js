/*--Premier canvas(Background en opacité réduite)--*/

let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let x = 250  //point de départ x
let y = 10   //point de départ y
let e = 10   //épaisseur
let L = 40   //Largeur
let H = 30   //Hauteur
let dx = 2   //décalage x
let dy = 2*dx  //décalage y
ctx.globalAlpha = 0.2  //opacité

/*--Barre du haut (Top0 = T0) */

function drawT0 () {

    ctx.beginPath();
    ctx.moveTo(x, y);          //(240,10)
    ctx.lineTo((x-L), y);      //(190,10)
    ctx.lineTo((x-L)+e,(y+e)); //(196,16)
    ctx.lineTo((x-e),(y+e));   //(234,16)
    ctx.fillStyle= `rgb(255, 17, 55)`; 
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
    ctx.fillStyle= `rgb(255, 17, 55)`;
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
    ctx.fillStyle= `rgb(255, 17, 55)`;
    ctx.fill();
}

/*--Barre du Bas (Bottom3 = B3) */

function drawB3 () {

    ctx.beginPath();
    ctx.moveTo(x,(y+dy)+(H+(e/2)+dy+(e/2))+H+dy);         //(240,118)
    ctx.lineTo((x-L),(y+dy)+(H+(e/2)+dy+(e/2))+H+dy);     //(190,118)
    ctx.lineTo((x-L)+e,(y+dy)+(H+(e/2)+dy+(e/2))+H+dy-e); //(196,112)
    ctx.lineTo((x-e),(y+dy)+(H+(e/2)+dy+(e/2))+H+dy-e);   //(234,112)
    ctx.fillStyle= `rgb(255, 17, 55)`;
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
    ctx.fillStyle= `rgb(255, 17, 55)`;
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
    ctx.fillStyle= `rgb(255, 17, 55)`;
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
    ctx.fillStyle= `rgb(255, 17, 55)`;
    ctx.fill();
}

/*--Séparation deux points ( : ) */

function drawTwoMarks () {

    ctx.beginPath();
    ctx.arc(135, 35, 6, 0, 2 * Math.PI);
    ctx.arc(135, 65, 6, 0, 2 * Math.PI);
    ctx.fillStyle= `rgb(255, 17, 55)`;
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

/*--Réalisation du background (nombres + séparation)--*/

function backgroundNumber () {

    numberOne();
    numberTwo();
    drawTwoMarks();
    numberThree();
    numberFour();
}

backgroundNumber()

/*--Fin du premier canvas (background) --*/

/*--Deuxième canvas (écriture de l'heure)--*/

function draw() {

    let canvas2 = document.getElementById('c2');
    let ctx2 = canvas2.getContext('2d');
    Numbers = [Zero,One,Two,Three,Four,Five,Six,Seven,Eight,Nine,drawTwoMarks]
    ctx2.clearRect(0, 0, 270, 100);
    ctx2.globalAlpha = 1 ;
    ctx2.shadowColor = `rgba(255, 17, 55, 1)`;
    ctx2.shadowOffsetX = 0;
    ctx2.shadowOffsetY = 0;
    ctx2.shadowBlur = 10;

    /*--Barre du haut (Top0 = T0) */

function drawT0 () {

    ctx2.beginPath();
    ctx2.moveTo(x, y);          //(240,10)
    ctx2.lineTo((x-L), y);      //(190,10)
    ctx2.lineTo((x-L)+e,(y+e)); //(196,16)
    ctx2.lineTo((x-e),(y+e));   //(234,16)
    ctx2.fillStyle= `rgb(255, 17, 55)`; 
    ctx2.fill();
}

/*--Barre de droite en haut (Right-Top1 = RT1) */

function drawRT1 () {

    ctx2.beginPath();
    ctx2.moveTo((x+dx),(y+dy));                 //(241,12)
    ctx2.lineTo((x+dx),(y+dy)+H);               //(241,60)
    ctx2.lineTo((x+dx)-(e/2),((y+dy)+H)+(e/2)); //(238,63)
    ctx2.lineTo((x+dx)-e,(y+dy)+H);             //(235,60)
    ctx2.lineTo((x+dx)-e,(y+dy)+e);             //(235,18)
    ctx2.fillStyle= `rgb(255, 17, 55)`;
    ctx2.fill();
}

/*--Barre de droite en bas (Right-Bottom2 = RB2) */

function drawRB2 () {

    ctx2.beginPath();
    ctx2.moveTo((x+dx)-(e/2),(y+dy)+(H+(e/2)+dy));         //(238,65)
    ctx2.lineTo((x+dx),(y+dy)+(H+(e/2)+dy+(e/2)));         //(241,68)
    ctx2.lineTo((x+dx),(y+dy)+(H+(e/2)+dy+(e/2))+H);       //(241,116)
    ctx2.lineTo((x+dx)-e,(y+dy)+(H+(e/2)+dy+(e/2))+(H-e)); //(235,110)
    ctx2.lineTo((x+dx)-e,(y+dy)+(H+(e/2)+dy+(e/2)))        //(235,68)
    ctx2.fillStyle= `rgb(255, 17, 55)`;
    ctx2.fill();
}

/*--Barre du Bas (Bottom3 = B3) */

function drawB3 () {

    ctx2.beginPath();
    ctx2.moveTo(x,(y+dy)+(H+(e/2)+dy+(e/2))+H+dy);         //(240,118)
    ctx2.lineTo((x-L),(y+dy)+(H+(e/2)+dy+(e/2))+H+dy);     //(190,118)
    ctx2.lineTo((x-L)+e,(y+dy)+(H+(e/2)+dy+(e/2))+H+dy-e); //(196,112)
    ctx2.lineTo((x-e),(y+dy)+(H+(e/2)+dy+(e/2))+H+dy-e);   //(234,112)
    ctx2.fillStyle= `rgb(255, 17, 55)`;
    ctx2.fill();
}

/*--Barre de gauche en bas (Left-Bottom4 = LB4) */

function drawLB4 () {

    ctx2.beginPath();
    ctx2.moveTo((x-L)-dx+(e/2),(y+dy)+(H+(e/2)+dy));         //(192,65)
    ctx2.lineTo((x-L)-dx+e,(y+dy)+(H+(e/2)+dy+(e/2)));       //(195,68)
    ctx2.lineTo((x-L)-dx+e,(y+dy)+(H+(e/2)+dy+(e/2))+(H-e)); //(195,110)
    ctx2.lineTo((x-L)-dx,(y+dy)+(H+(e/2)+dy+(e/2))+H);       //(189,116)
    ctx2.lineTo((x-L)-dx,(y+dy)+(H+(e/2)+dy+(e/2)));         //(189,68)
    ctx2.fillStyle= `rgb(255, 17, 55)`;
    ctx2.fill();
}

/*--Barre de gauche en haut (Left-Top5 = LT5) */

function drawLT5 () {

    ctx2.beginPath();
    ctx2.moveTo((x-L)-dx,(y+dy)); //(189,12)
    ctx2.lineTo((x-L)-dx,(y+dy)+H); //(189,60)
    ctx2.lineTo((x-L)-dx+(e/2),((y+dy)+H)+(e/2)); //(192,63)
    ctx2.lineTo((x-L)-dx+e,(y+dy)+H); //(195,60)
    ctx2.lineTo((x-L)-dx+e,(y+dy)+e); //(195,18)
    ctx2.fillStyle= `rgb(255, 17, 55)`;
    ctx2.fill();
}

/*--Barre de milieu (Center6 = C6) */

function drawC6 () {

    ctx2.beginPath();
    ctx2.moveTo((x+dx)-(e/2)-(2*dx),((y+dy)+H)+(e/2)+(dy/2));               //(236,64)
    ctx2.lineTo((x+dx)-(e/2)-(2*dx)-(e/2),((y+dy)+H)+(e/2)+(dy/2)+(e/2));   //(233,67)
    ctx2.lineTo((x-L)-dx+(e/2)+(2*dx)+(e/2),((y+dy)+H)+(e/2)+(dy/2)+(e/2)); //(197,67)
    ctx2.lineTo((x-L)-dx+(e/2)+(2*dx),((y+dy)+H)+(e/2)+(dy/2));             //(194,64)
    ctx2.lineTo((x-L)-dx+(e/2)+(2*dx)+(e/2),((y+dy)+H)+(e/2)+(dy/2)-(e/2)); //(197,61)
    ctx2.lineTo((x+dx)-(e/2)-(2*dx)-(e/2),((y+dy)+H)+(e/2)+(dy/2)-(e/2));   //(233,61)
    ctx2.fillStyle= `rgb(255, 17, 55)`;
    ctx2.fill();
}

function drawTwoMarks () {

    ctx2.beginPath();
    ctx2.arc(135, 35, 6, 0, 2 * Math.PI);
    ctx2.arc(135, 65, 6, 0, 2 * Math.PI);
    ctx2.fillStyle= `rgb(255, 17, 55)`;
    ctx2.fill();
}

/*--Ecriture du chiffre "Zéro"--*/

function Zero () {

    drawT0 ();
    drawRT1 ();
    drawRB2 ();
    drawB3 ();
    drawLB4 ();
    drawLT5 ();
}

/*--Ecriture du chiffre "One"--*/

function One () {

    drawRT1 ();
    drawRB2 ();
}

/*--Ecriture du chiffre "Two"--*/

function Two () {

    drawT0 ();
    drawRT1 ();
    drawC6 ();
    drawLB4 ();
    drawB3 ();
}

/*--Ecriture du chiffre "Three"--*/

function Three () {

    drawT0 ();
    drawRT1 ();
    drawC6 ();
    drawRB2 ();
    drawB3 ();
}

/*--Ecriture du chiffre "Four"--*/

function Four () {

    drawLT5 ();
    drawRT1 ();
    drawC6 ();
    drawRB2 ();
}

/*--Ecriture du chiffre "Five"--*/

function Five () {

    drawT0 ();
    drawLT5 ();
    drawC6 ();
    drawRB2 ();
    drawB3 ();
}

/*--Ecriture du chiffre "Six"--*/

function Six () {

    drawT0 ();
    drawLT5 ();
    drawC6 ();
    drawRB2 ();
    drawB3 ();
    drawLB4();
}

/*--Ecriture du chiffre "Seven"--*/

function Seven () {

    drawT0 ();
    drawRT1 ();
    drawRB2 ();
}

/*--Ecriture du chiffre "Eight"--*/

function Eight () {

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

    drawT0 ();
    drawRT1 ();
    drawRB2 ();
    drawB3 ();
    drawLT5 ();
    drawC6 ();
}
}

function update() {

    /*--Affichage des heures--*/

function writeHour() {

    const time = new Date()
    const hour = time.getHours()
    let units = hour % 10
    let tens = (hour - (hour % 10)) / 10
    x = 60
    Numbers[tens]()
    x = 120
    Numbers[units]()
}

    writeHour();

/*--Affichage des minutes--*/

function writeMinute() {

    const time = new Date()
    const minute = time.getMinutes()
    let second = time.getSeconds()
    let units = minute % 10
    let tens = (minute - (minute % 10)) / 10
    x = 190
    Numbers[tens]()
    x = 250
    Numbers[units]()
    drawTwoMarks ()
}

    writeMinute();
    
}

function run() {
    draw()
    update();
    requestAnimationFrame(run);
}

run()
