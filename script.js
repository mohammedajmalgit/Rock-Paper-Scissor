// alert("Hi")
//Challenge 1: Your Age In Days

// function ageInDays() {
//     var birthYear = prompt("What year you were born")
//     var today = new Date().getFullYear()
//     var result = (today-birthYear)*365;
//     var h1 = document.createElement("h1")
//     var textAnswer = document.createTextNode("You are " + result + " days old.")
//     h1.setAttribute('id', 'ageInDays')
//     h1.appendChild(textAnswer)
//     document.getElementById("flex-box-result").appendChild(h1)
// }

// function reset(){
//     document.getElementById('ageInDays').remove() 
// }

//Generate Cat

// function generateCat(){
//     var img = document.createElement('img')
//     var div = document.getElementById('generate-Cat')
//     img.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small'
//     div.appendChild(img)
// }

//Rock Paper Scissor

function rpsGame(choice){
    var humanChoice, botChoice;
    humanChoice = choice.id;
    botChoice = numberToChoice(Math.floor(Math.random()*3))
    console.log(botChoice)
    result = decideWinner(humanChoice, botChoice)
    message = finalMessage(result)
    rpsFrontEnd(humanChoice, botChoice, message)
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number]
}

function decideWinner(yourChoice, computerChoice){
    var rpsData = {
        'rock':{'scissor': 1 , 'rock': 0.5 , 'paper' : 0},
        'paper':{'rock' : 1, 'paper' : 0.5, 'scissor' : 0},
        'scissor':{'paper': 1, 'scissor    ' : 0.5, 'rock' : 0},
    }

    var yourScore = rpsData[yourChoice][computerChoice];

    return yourScore
}

function finalMessage(yourScore){
    if(yourScore === 0){
        return {'message':'You Lost!', 'color':'red'}
    }else if(yourScore === 0.5){
        return {'message':'You tied!', 'color':'yellow'}
    }else{
        return {'message':'You Won!', 'color':'Green'}
    }
}

function rpsFrontEnd(humanImageChoice, computerImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanChoiceDiv = document.createElement('div')
    var messageDiv = document.createElement('div')
    var computerChoiceDiv = document.createElement('div')

    humanChoiceDiv.innerHTML = "<img src='"+imagesDatabase[humanImageChoice]+"' alt='' height=150px width=150px style='box-shadow = 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color:"+ finalMessage.color+"'>"+finalMessage.message+"</h1>"
    computerChoiceDiv.innerHTML = "<img src='"+ imagesDatabase[computerImageChoice]+"' alt='' height=150px width=150px style='box-shadow = 0px 10px 50px rgba(243, 38, 24, 1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanChoiceDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(computerChoiceDiv)
}


//Challenge 4: Change Button Color

// var allButtons = document.getElementsByTagName('button')
// var copyAllButtons = [];
// for(let i = 0; i < allButtons.length; i++){
//     copyAllButtons.push(allButtons[i].classList[1])
// }

// function buttonColorChange(color){
//     if(color.value==='red'){
//         buttonsRed()
//     }else if(color.value === 'green'){
//         buttonsGreen()
//     }else if(color.value === 'random'){
//         buttonsRandom()
//     }else if(color.value === 'reset'){
//         buttonsReset()
//     }
// }

// function buttonsRed(){
//     for(let i=0;i<allButtons.length;i++){
//         allButtons[i].classList.remove(allButtons[i].classList[1]);
//         allButtons[i].classList.add('btn-danger')
//     }
// }

// function buttonsGreen(){
//     for(let i=0;i<allButtons.length;i++){
//         allButtons[i].classList.remove(allButtons[i].classList[1])
//         allButtons[i].classList.add('btn-success')
//     }
// }

// function buttonsReset(){
//     for(let i=0;i<allButtons.length;i++){
//         allButtons[i].classList.remove(allButtons[i].classList[1])
//         allButtons[i].classList.add(copyAllButtons[i])
//     }
// }

// function buttonsRandom(){
//     for(let i=0;i<allButtons.length;i++){
//         allButtons[i].classList.remove(allButtons[i].classList[1])
//         allButtons[i].classList.add(copyAllButtons[Math.floor(Math.random()*7)])
//     }
// }
