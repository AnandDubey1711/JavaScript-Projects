// api.quotable.io/random

const RANDOM_QUOTE = 'http://api.quotable.io/random';
const quoteDisplay = document.getElementById('quote-display');
const quoteInput = document.getElementById('quote-input');
const timerElement = document.getElementById('timer');

quoteInput.addEventListener('input',()=>{

    const arrayQuote = quoteDisplay.querySelectorAll('span');
    const arrayValue = quoteInput.value.split('')
    let correct = true;
    arrayQuote.forEach((characterSpan,index)=>{
        const character = arrayValue[index];
        if(character===null){
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct =false;
        }
        else if(character === characterSpan.innerText){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');

        }else{
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('correct');
            correct=false;
        }
    })

    if(correct) renderNewQuote();
})


function getRandomQuote(){
    return fetch(RANDOM_QUOTE)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderNewQuote(){
    const quote = await getRandomQuote();
    quoteDisplay.innerHTML = '';
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
       
        characterSpan.innerText=character;
        quoteDisplay.appendChild(characterSpan);
    });
    quoteInput.value  = null;
    startTimer();
}

let startTime;
function startTimer(){
    timerElement.innerText = 0;
    startTime = new Date();
    setInterval(()=>{
            timer.innerText= getTimerTime();
    },1000)
    
} 

function getTimerTime(){
    return Math.floor((new Date()-startTime)/1000);
}


renderNewQuote();

