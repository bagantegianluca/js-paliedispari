/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

//Chiedo all'utente una parola
const word = prompt('Inserisci una parola:');

//Creo funzione per verificare se la parola è palindroma
/**
* ### isPalindromicWord
* @description Return a true boolean value if the string is palindromic
* @param {string} word Word to check
*/
function isPalindromicWord(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    if (reverseWord === word) {
        return true;
    }
    return false;
}

//Creo una funzione per stampare un messaggio sul console, alert e body
/**
* ### printLogAlertBody
* @description Print a message in console.log, alert and p element in body
* @param {string} string Message
*/
function printLogAlertBody(message) {
    console.log(message);
    alert(message);
    pElement = document.createElement('p');
    pElement.innerHTML = message;
    document.querySelector('body').appendChild(pElement);
}

//Invoco funzione e stampo risultato
if (isPalindromicWord(word)) {
    message = `La parola "${word}" è palindroma.`;
    printLogAlertBody(message);
} else {
    message = `La parola "${word}" NON è palindroma.`;
    printLogAlertBody(message);
}

//Chiedo all'utente un numero da 1 a 5 e lo salvo in una variabile
const userNumber = prompt('Inserisci un numero da 1 a 5\nAttenzione che controllo!');

//Controllo se l'utente ha inserito un numero e se è compreso tra 1 e 5
if (!isNaN(Number(userNumber)) && Number(userNumber) >= 1 && Number(userNumber) <= 5) {

    //L'utente ha inserito un numero valido quindi chiedo se sceglie pari o dispari
    const userOddEven = prompt('Digita "pari" o "dispari" per fare la tua scelta\nAttenzione che controllo!');

    if (userOddEven.toUpperCase() === 'PARI' || userOddEven.toUpperCase() === 'DISPARI') {

        //L'utente ha scelto pari o dispari

        //Genero il numero casuale da 1 a 5 per il computer invocando la funzione getRandomMinMax()
        const comNumber = getRandomMinMax(1, 5);

        /**
        * ### getRandomMinMax
        * @description Generate a random number from a min value and a max one
        * @param {number} min Min random number
        * @param {number} max Max random number
        */
        function getRandomMinMax(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
        }

        //Creo funzione per calcolare la somma del numero utente
        /**
        * ### sum2num
        * @description Return sum of num1 + num2
        * @param {number} num1 Number 1
        * @param {number} num2 Number 2
        */
        function sum2num(num1, num2) {
            return Number(num1) + Number(num2);
        }

        //Creo funzione per calcolare la somma del numero utente e del numero computer e verificare se il numero è pari o dispari
        /**
        * ### isSumEven
        * @description Return if the sum of num1 + num2 is even
        * @param {number} num1 Number 1
        * @param {number} num2 Number 2
        */
        function isSumEven(num1, num2) {
            result = sum2num(num1, num2);
            return result % 2 === 0
        }

        const resSumEven = isSumEven(userNumber, comNumber);
        const sumUserCom = sum2num(userNumber, comNumber);
        const resUserEven = userOddEven.toUpperCase() === "PARI";

        //Controllo se l'utente ha indovinato
        if (resSumEven === resUserEven) {

            //Se ha indovinato gli dico che ha vinto
            message = `HAI VINTO! Il tuo numero era "${userNumber}", quello del computer era "${comNumber}" e la somma fa "${sumUserCom}"`;
            printLogAlertBody(message);
        } else {

            //Se non ha indovinato gli dico che ha perso
            message = `HAI PERSO! Il tuo numero era "${userNumber}", quello del computer era "${comNumber}" e la somma fa "${sumUserCom}"`;
            printLogAlertBody(message);
        }

    }   //L'utente non ha scelto nè pari nè dispari
    else {
        message = `Ti avevo chiesto inserire la parola "pari" o "dispari", ma hai inserito "${userOddEven}"!\ Non prendermi in giro!`;
        printLogAlertBody(message);
    }

}   //L'utente non ha inserito un numero valido e lo avviso
else {
    message = `Ti avevo chiesto un numero da 1 a 5, ma hai inserito "${userNumber}"! Non prendermi in giro!`
    printLogAlertBody(message);
}
