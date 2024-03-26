const INTERVAL_TIME = 1000;
const GAME_TIME = 15000;

let holes$ = document.querySelectorAll('.hole')
let timer = null;
let score;

const init = () => {
    if (timer !== null){
        clearInterval(timer)
    };
    score = 0;
    writeScore();
    timer = setInterval(showHans, INTERVAL_TIME);
    setTimeout(endGame, GAME_TIME);
    showHans();
};

let startBtn$ = document.querySelector('#startBtn');
startBtn$.addEventListener('click', init);

const endGame = () => {
    hideAllHans();
    clearInterval(timer);
    alert('Has conseguido ' + score + ' puntos');
};


const addMoleEvent = () => {
    let moles$ = document.querySelectorAll('.mole')
        for(let mole$ of moles$){
            mole$.addEventListener('click', smackHans);
        };
};

addMoleEvent();

const writeScore = () => {
    let score$ = document.querySelector('.score');
    score$.textContent = score;
};

const showHans = () => {
    let hole$ = getRandomHole();
    hideAllHans();
    hole$.classList.add('up');
};

const hideAllHans = () => {
    for(let hole$ of holes$){
        hole$.classList.remove('up');
    }
};

const getRandomHole = () => {
    let randomIndex = Math.floor(Math.random() * holes$.length);
    return holes$[randomIndex];
};


function smackHans() {
    score++;
    writeScore();
    this.parentNode.classList.remove('up')
};
