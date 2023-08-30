'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)*/



let number = Math.trunc(Math.random()*20) + 1;

let score = 20;

let highScore = 0;



document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess)

    //se for diferente do numero
    if(!guess){
        document.querySelector('.message').textContent = 'No Number Avaliable';
    } 

    //se for extritamente igual ao numero
    else if(guess === number){
        document.querySelector('.message').textContent = 'Congratulations!';
        document.querySelector('body').style.backgroundColor = '#60b347'
        
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;

        if(score > highScore){

        document.querySelector('.highscore').textContent = highScore;
            highScore = score

        }

    } 

    //se for diferente do numero secreto
    else if (guess !== number){
        if(score >= 1){
        document.querySelector('.message').textContent = guess > number ? 'To high!' : 'To Lower!';
        score--
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'loser!';
            document.querySelector('.score').textContent = 0;
        }
    }
    })
    // else if (guess > number){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'To High, try lower!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //          //caso chegue a 0, printará isso na tela pro usuario
    //         document.querySelector('.message').textContent = 'loser!'
    //         document.querySelector('body').style.backgroundColor = '#DC143C'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } 

    // //quando é menor
    // else if (guess < number){

    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'To low, try higher!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         //caso chegue a 0, printará isso na tela pro usuario
    //         document.querySelector('.message').textContent = 'loser!'
    //         document.querySelector('body').style.backgroundColor = '#DC143C'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }


document.querySelector('.again').addEventListener('click', function(){

        score = 20;
        number = Math.trunc(Math.random()*20) + 1;
        document.querySelector('.message').textContent = 'Start Guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').textContent = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

});

