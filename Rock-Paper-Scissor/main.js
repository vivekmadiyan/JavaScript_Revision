let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")
let userScorePara=document.querySelector("#user-score")
let compScorePara=document.querySelector("#comp-score")
let gencompChoice=()=>{
    //rock,paper,scissors
    let options=["rock","paper","scissors"];
    let idx= Math.floor(Math.random()*3);
    return options[idx];
}

const playGame=(userChoice)=>{
let compChoice=gencompChoice();
console.log("comp choice: ", compChoice)
result(userChoice,compChoice);
}
const result=(userChoice,compChoice)=>{
    if(compChoice===userChoice){
        console.log("draw")
        msg.innerText="Draw";
    }
    else if(compChoice==="rock" && userChoice ==="paper"){
    userScore++;
     console.log("you win");
     msg.innerText="You Win";
     userScorePara.innerText=userScore;
     
    }
    else if(compChoice==="rock" && userChoice==="scissors"){
        compScore++;
        console.log("you lose");
        msg.innerText="You Lose";
        compScorePara.innerText=compScore;
    }
    else if(compChoice==="paper" && userChoice==="scissors"){
        userScore++;
        console.log("you win");
        msg.innerText="You Win";
        userScorePara.innerText=userScore;
    }
    else if(compChoice==="paper" && userChoice==="rock"){
        compScore++;
        console.log("you lose");
        msg.innerText="You Lose";
        compScorePara.innerText=compScore;
    }
    else if(compChoice==="scissors" && userChoice==="rock"){
        userScore++;
        console.log("you win");
         msg.innerText="You Win";
         userScorePara.innerText=userScore;
    }
    else if(compChoice==="scissors" && userChoice==="paper"){
        compScore++;
        console.log("you lose"); 
        msg.innerText="You Lose";
        compScorePara.innerText=compScore;
    }  
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("user choice:", userChoice);
        playGame(userChoice);
    });
});
