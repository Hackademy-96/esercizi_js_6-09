// ESERCIZIO NUMERO 1
let number1= 10;
let number2=6;
let number3=12;
let number4=18;
let number5= 22;
let somma= number1+number2+number3+number4+number5;
let numeroMedia= 5;
let media= somma/numeroMedia;
let frase1= "La somma tra gli elementi è "
let frase2=" e la sua media è "
console.log(frase1+somma+frase2+media);


// ESERCIZIO NUMERO 2
let annoCorrente= 2023;
let annoDiNascita= 2001;
let età= annoCorrente-annoDiNascita;
console.log(età);
let cento=100;
let centenario=cento-età;
console.log(`Hai ` +età+ ` e ti mancano `+centenario+` anni per compiere `+cento+` anni`)

// ESERCIZIO NUMERO 3 
let gatti=44;
let perFila=6;
let file= gatti/perFila;
file=7;
let gattiNelleFile= perFila*file;
console.log(gattiNelleFile);
let restoGatti=gatti-gattiNelleFile
let gattiMancanti= perFila-restoGatti
console.log(`Ci sono `+file+` file di gatti e ne mancano `+gattiMancanti+` per completare la fila, con un avanzo di `+restoGatti );

// ESERCIZIO 4 
console.log(false||true);
console.log(23>6);
console.log(true||NaN);
console.log("ciao"&&true);
console.log(null||true);

// ESERCIZIO EXTRA
const temp= [a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7]
console.log(`La temperatura più calda è `+Math.max(...temp)+`gradi, quella più fredda è di `+Math.min(...temp)+` gradi`);




