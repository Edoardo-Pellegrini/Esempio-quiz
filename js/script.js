
alert('Rispondi alle seguenti domande')
let addizione = window.prompt('2+2=')
let sottrazione = window.prompt('5-2=')
let moltiplicazione = window.prompt('3x3=')
let divisione = window.prompt('6:2=')
let pari = window.prompt('Scrivi un numero pari')
let dispari = window.prompt('Scrivi un numero dispari')



if(addizione == 4 ) {
    document.getElementById('piu').innerHTML ='Bravo risposta giusta';
    console.log(addizione + ' ' + 'Bravo risposta giusta' );
} else {document.getElementById('piu').innerHTML ='Risposta sbagliata';
        console.log(addizione + ' ' + 'Risposta sbagliata' );}

if(sottrazione == 3 ) {
    document.getElementById('meno').innerHTML ='Bravo risposta giusta';
    console.log(sottrazione + ' ' + 'Bravo risposta giusta' );
} else {document.getElementById('meno').innerHTML ='Risposta sbagliata';
        console.log(sottrazione + ' ' + 'Risposta sbagliata' );}

if(moltiplicazione == 9 ) {
    document.getElementById('per').innerHTML ='Bravo risposta giusta';
    console.log(moltiplicazione + ' ' + 'Bravo risposta giusta' );
} else {document.getElementById('per').innerHTML ='Risposta sbagliata';
        console.log(moltiplicazione + ' ' + 'Risposta sbagliata' );}

if(divisione == 3 ) {
    document.getElementById('diviso').innerHTML ='Bravo risposta giusta';
    console.log(divisione + ' ' + 'Bravo risposta giusta' );
} else {document.getElementById('diviso').innerHTML ='Risposta sbagliata';
        console.log(divisione + ' ' + 'Risposta sbagliata' );}

const due = 2;

if(pari % due == 0 ) {
    document.getElementById('pari').innerHTML ='Bravo risposta giusta';
    console.log(pari + ' ' + 'Bravo risposta giusta' );
} else {document.getElementById('pari').innerHTML ='Risposta sbagliata';}
        console.log(pari + ' ' + 'Risposta sbagliata' );
if(dispari % due !== 0 ) {
    document.getElementById('dispari').innerHTML ='Bravo risposta giusta';
    console.log(dispari + ' ' + 'Bravo risposta giusta' );
} else {document.getElementById('dispari').innerHTML ='Risposta sbagliata';
        console.log(dispari + ' ' + 'Risposta sbagliata' );}


if(addizione == 4 && sottrazione == 3 && moltiplicazione == 9 && divisione == 3 && pari % due == 0 && dispari % due !== 0 ) {
    alert('Ottimo, sei un pro!')
}
else{
    alert('Ci sono risposte sbagliate!')
}
if(addizione !== 4 && sottrazione !== 3 && moltiplicazione !== 9 && divisione !== 3 && pari % due !== 0 && dispari % due == 0 ) {
    alert('Pessimo, studia di più!')
}      
