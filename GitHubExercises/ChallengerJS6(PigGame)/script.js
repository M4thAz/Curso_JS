'use strict';
//seleção de elementos
const player01EL = document.querySelector('.player--0')
const player02EL = document.querySelector('.player--1')
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');


    
    let scores, currentScore, activePlayer, isPlaying;

const newGame = function(){
    
    //array pra armazenar o score dos players
        scores = [0, 0]
        //score atual do player
        currentScore = 0;
        //player ativo
        activePlayer = 0;
        //se o jogo está ativo
        isPlaying = true;




    score0EL.textContent = 0;
    score1EL.textContent = 0;
    currentEl0.textContent = 0;
    currentEl1.textContent = 0;

    diceEl.classList.add('hidden');
    player01EL.classList.remove('player--winner');
    player02EL.classList.remove('player--winner');
    player01EL.classList.add('player--active');
    player02EL.classList.remove('player--active');
    

}

newGame()

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player01EL.classList.toggle('player--active');
    player02EL.classList.toggle('player--active');
    
}

btnRoll.addEventListener('click', function(){
    //gerar um numero aleatório para o dado
    //math.trunc transforma em decimal o numero que o math.random gerou de 0 a 0.999... 
    // o +1 é pra nos dar 6 dados
    if(isPlaying){
            const dice = Math.trunc(Math.random() * 6) + 1;

            //mostra o valor do dado na tela
            diceEl.classList.remove('hidden');
            diceEl.src = `dice-${dice}.png`;


            //checa se o valor é 1
            if(dice !== 1){
                currentScore += dice;
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            }
                //altera o player caso o valor for 1
            else{
                switchPlayer();
            }
    }       
})

btnHold.addEventListener('click', function(){
    if(isPlaying){
    console.log('btnHold')
    //adicionar o score atual do player ativo
    scores[activePlayer] += currentScore
    // scores[1] = scores[1] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //checar se for 100
    //finalizar o game aos 100 pontos, se não, trocar para o próximo player
    if(scores[activePlayer] >= 100){
        isPlaying = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }else{
    switchPlayer();
    }
    }
});

btnNew.addEventListener('click', newGame);
