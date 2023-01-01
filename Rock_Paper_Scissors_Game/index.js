const computerchoiceDisplay = document.getElementById('Computer-Choice')
const YourchoiceDisplay = document.getElementById('User-Choice')
const ResultDisplay = document.getElementById('Result')
const possibleChoices= document.querySelectorAll('button')

let Yourchoice
let computerchoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
   Yourchoice = e.target.id
   YourchoiceDisplay.innerHTML = Yourchoice
   generateComputerChoice()
   getResult()
   
}))
 function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1
    if(randomNumber=== 1){
        computerchoice='Rock'
    }
    if(randomNumber===2){
        computerchoice= 'Scissors'
    }
    if(randomNumber===3){
        computerchoice= 'Paper'
    }
    computerchoiceDisplay.innerHTML = computerchoice
 }
 function getResult(){
    if(computerchoice==Yourchoice){
        result= 'Its a Draw';
    }
    if(computerchoice==='Rock' && Yourchoice === 'Paper'){
        result= 'You Lost';
    }
    if(computerchoice=== 'Rock' && Yourchoice === 'Scissors'){
        result='You Lost';
    }
    if(computerchoice==='Rock' && Yourchoice=== 'Paper'){
        result= 'You Win';
    }
    if(computerchoice=== 'Paper' && Yourchoice === 'Scissors'){
        result='You Win';
    }
    if(computerchoice=== 'Paper' && Yourchoice=== 'Rock'){
        result= 'You Lose';
 }
    if(computerchoice=== 'Scissors' && Yourchoice=== 'Rock'){
        result='You Win';
    }
    if(computerchoice==='Scissors' && Yourchoice ==='Paper'){
        result='You Lose';
    }
   
    ResultDisplay.innerHTML = result
 }
 
