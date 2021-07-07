for(let i=0;i<5;i++){
    game();
}

function game(){
    let playerSelection = prompt("Choose!");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    console.log("player: "+ playerSelection);
    console.log("computer: "+ computerSelection);
    let result= playRound(playerSelection, computerSelection);
    console.log("Result: "+ result);
}

function playRound(playerSelection, computerSelection) {
    let ans="";
    if(playerSelection=="rock"){
        if(computerSelection=="paper"){
            ans="Lose";
        }else if(computerSelection=="scissors"){
            ans="Win";
        }else if(computerSelection=="rock"){
            ans="Tie";
        }
    }else if(playerSelection=="paper"){
        if(computerSelection=="paper"){
            ans="Tie";
        }else if(computerSelection=="scissors"){
            ans="Lose";
        }else if(computerSelection=="rock"){
            ans="Win";
        }
    }else if(playerSelection=="scissors"){
        if(computerSelection=="paper"){
            ans="Win";
        }else if(computerSelection=="scissors"){
            ans="Tie";
        }else if(computerSelection=="rock"){
            ans="Lose";
        }
    }
    return ans;
}

function computerPlay(){
    let r = "rock";
    let s = "scissors";
    let p = "paper";
    var ans;
    const randomgen = Math.random();

    if(randomgen<0.3){
        ans = r;
    } else if(randomgen>=0.3 && randomgen<0.6){
        ans = s;
    } else {
        ans = p;
    }
    return ans;
}