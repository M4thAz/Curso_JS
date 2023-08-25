'use strict';



/*
function testParameters (sum, sub){

        const media = sum + sub;
        console.log(`o resultado da sua operação é de ${media}`)
        return media;

}


const soma = 15
const soma2 = 30

const trysum = soma + soma2

const msgbody = "testando"

if(msgbody == "testando"){
    console.log("oi")
}

const testfuncion = function(testAge){
    testAge = testAge + testAge;
    return testAge;
}

const testFunctionOlder = function(older){
    const primeAge = 15;
    older = older - primeAge
    return older;
}


console.log(testfuncion(10))
console.log(testFunctionOlder(45))
console.log(testFunctionOlder(45) - testfuncion(10));

function somadosDados(receptor){
        receptor = receptor * 4;
        return receptor;

}


function aquivaoosDados(num1 = 15, num2 = 20){

        
        const result = `Resultado do numero é igual a ${somadosDados(num1)} ${somadosDados(num2)}`
        return result;
}

console.log(aquivaoosDados(2, 6));


// const vetor = [1, 2, 3, 4];
// const dobro = vetor.map((elemento) => elemento * 2);
// console.log(dobro); // Saída: [2, 4, 6, 8]


const calcAverage = (scoreDA, scoreDB, scoreDC) => {
       const Average = (scoreDA + scoreDB + scoreDC) / 3;
    
    return Average};


const scoreDolphins = calcAverage(84, 54, 41);
const scoreKoalas = calcAverage(10, 10,10);

function checkWinner(avgDolphins, avgKoalas){
    console.log(`aqui jas uma frase`)
    if(avgDolphins > avgKoalas * 2){
    console.log(`${avgDolphins} are bigger than ${avgKoalas}`)
    }
    else{
        console.log(`No winners`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);


const testName = 'Opa cpx';


//--------------------------------------------------- ARRAYS ---------------------------------------------------//
const testArray = [testName, 'irmao', 'como', 'vai', 50];

console.log(testArray[3]);
console.log(testArray.length);
console.log(testArray[testArray.length - 1]);

const calcAge = function (birth){
        return 2023 - birth;
}

const Age1 = calcAge(testArray[3])
console.log(Age1);


const calcTip = function (bill){
        
        const percentBill = 15;
        const percentDifferentBill = 20;

        if(bill >= 50 && bill <= 300){
            const tipBill = bill * (percentBill / 100);
            return tipBill;
        }

        else if(bill <= 50 || bill >= 300){
            
            const twenty = bill * (percentDifferentBill / 100);
            return twenty;
        }

}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

const totals = [bills[0] + tips [0], bills[1] + tips [1], bills[2] + tips [2]]
console.log(tips, totals);
*/

//---------------------------------------------------------------- objetos ----------------------------------------------------------------//


// const jonas = {

//         firstName: 'Jonas',
//         lastName: 'Schmedtmann',
//         age: 2050-2001,
//         job: 'Programmer',
//         friends: ['Michael', 'Peter', 'Steven']
// };


// const nameKey = 'Name';

// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])
const readline = require('readline');

// Cria a interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pede ao usuário que insira um valor
rl.question('Digite um número: ', (valor) => {
  console.log('O valor digitado foi:', valor);
  rl.close(); // Encerra a interface readline
});

