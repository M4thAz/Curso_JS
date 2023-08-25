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


//---------------------------------------------------------------- objetos ----------------------------------------------------------------//


const jonas = {

        firstName: 'Jonas',
        lastName: 'Schmedtmann',
        age: 2050-2001,
        job: 'Programmer',
        friends: ['Michael', 'Peter', 'Steven']
};


// const nameKey = 'Name';

// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestedIn = prompt('Diga oq vc quer saber do user');

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn])
// }else{
//     console.log("Wrong request, please choose another one!");
// }

// jonas.location = 'Portugal';
// jonas['Twitter'] = '@Mato_eo';

// console.log(jonas)


console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`)




const jonas = {

    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 2001,
    job: 'Programmer',
    friends: ['Michael', 'Peter', 'Steven'],
    harDriverLicense: true,

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} yeas old ${this.job}, and he has ${this.harDriverLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas.calcAge());

console.log(jonas.getSummary());



const mark ={

        // calcBMI: function(){
        //    const BMI = mark.mass / (mark.height * mark.height);
        //    return `${BMI.toFixed(1)}`;
        // },
        // getBMI: function(){
        //     return `${this.fullName} have a BMI ${this.calcBMI()}`
        // }

        fullName: 'Mark Greyson',
        mass: 79,
        height: 1.68,
};


const john = {
    fullName: 'John Travolta',
    mass: 79,
    height: 1.69,
};


const calcBMI = function(name ,mass, height){
   const BMI = mass / (height * height);
   return BMI;
}



const markBMI = calcBMI(mark.fullName, mark.mass, mark.height)
const johnBMI = calcBMI(john.fullName, john.mass, john.height)


if (markBMI < johnBMI){

    console.log((`${john.fullName} who have a ${johnBMI.toFixed(1)} is higher than ${mark.fullName} who have ${markBMI.toFixed(1)}`))

}else if(johnBMI < markBMI){
    console.log(`${john.fullName} have a lower BMI than ${mark.fullName}`)
}else{
    console.log(`BMI is the same`)
}

// console.log(getBMI())
// console.log

//         calcBMI: function(){
//             const BMI = john.mass / (john.height * john.height);
//             return `${BMI.toFixed(1)}`;
//         },
//         getBMI: function(){
//             return `${this.fullName} who have a BMI ${this.calcBMI()}`
//         }
// }


    // if(mark.calcBMI() > john.calcBMI()){
    //     // console.log(`${john.getBMI()} so, its bigger than ${mark.getBMI()}`)
    //     console.log(`${mark.getBMI()} is higher than ${john.getBMI()}`)
    // }else{
    //     console.log(`${john.getBMI()} is higher`);
    // }



    //---------------------------------------------------------- LOOP ----------------------------------------------------------//

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`to levantando ${rep}`);
// }



const jonas = [

    'Jonas',
    'Schmedtmann',
    2001,
    'Programmer',
    ['Michael', 'Peter', 'Steven'],
];


const typeData = [

]

for(let i = 0; i < jonas.length; i++){
    console.log(jonas, typeof jonas);
    typeData = typeof jonas;
}

    console.log(typeData)


    const years = [1998, 1999, 2001, 2005];

    const ages = [];



    for(let i = 0;  i < years.length; i++){

           ages  = 2037 -  years;
           ages.push(2027 - years);

    }
    
    console.log(ages)


console.log("-------------------Strings-------------------")
    
for(let i = 0; i < jonas.length; i++){
    
    if(typeof jonas !== 'string') continue;
    console.log(jonas, typeof jonas);

}

console.log("-------------------Number-------------------")

for(let i = 0; i < jonas.length; i++){
    
    if(typeof jonas === 'number') break;
    console.log(jonas, typeof jonas);

}


const jonas = [
    'Jonas',
    'Schmedtmann',
    2001,
    'Programmer',
    ['Michael', 'Peter', 'Steven'],
];


// for (let i = jonas.length -1; i >= 0; i--){
//     console.log(jonas)
// }


for (let exe = 1; exe < 4; exe++){
    console.log(`----------------Exercicio de numero ${exe}-------------------`)
    for(let rep = 1; rep <= 6; rep++)
    console.log(`rep de numero ${rep} do exercicio ${exe}`)

}*/




const calcTip = function(bill){
        if(bill >= 50 && bill <= 300){
            const tipBill = bill * 0.15;
            return tipBill;
        }

        else if(bill <= 50 || bill >= 300){
            
            const twenty = bill * 0.2;
            return twenty;
    }
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];


const tips = []


const totals = []


for(let i = 0; i < bills.length; i++){

    const tip = calcTip(bills[i]);

    tips.push(tip);
    totals.push(tip + bills[i]);

}

console.log(bills, tips, totals)



const calcAverage = function(arr){
    
        let sum = 0;

        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        console.log(sum);
        return sum / arr.length;

}

console.log(calcAverage(totals))