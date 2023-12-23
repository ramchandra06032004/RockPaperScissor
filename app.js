let yourScore=0;
let CompScore=0;

const choices=document.querySelectorAll(".choice");
const drawGameButton=document.querySelector(".drawGameButton");
const yourScoreButton=document.querySelector(".your-score");
const computerScoreButton=document.querySelector(".computer-score")
const msg=document.querySelector("#msg");
const messageContainer=document.querySelector(".message-container");
const chnageModeButton=document.querySelector(".changeModeButton");
const body=document.querySelector("body");
let mode="dark";

chnageModeButton.addEventListener("click",()=>{
    if(mode==="dark"){
        body.style.backgroundColor="#B1EDE8";
        msg.style.backgroundColor="#B1EDE8";
        mode="light";
    }else{
        body.style.backgroundColor="#000814" ;
        msg.style.backgroundColor="#000814";
        mode="dark";
    }
})


const generateComputerChoice=()=>{
    let options =["rock","paper","scissor"];
    let randomNumber=Math.floor(Math.random() *3);
    return options[randomNumber];

}
const showWinner=(winner , userChoicee , computerChoicee)=>{
    if (winner===true){
        
        msg.innerText=`You Win ${userChoicee} beats  ${computerChoicee}`;
        msg.style.backgroundColor="#31572c";
        yourScore++;
        yourScoreButton.innerText=yourScore;
    }else{
        
        msg.innerText=`You lost ${computerChoicee} beats your ${userChoicee}`;
        msg.style.backgroundColor="#ba181b";
        CompScore++;
        computerScoreButton.innerText=CompScore

    }
}





const playGame=(userChoice)=>{
    const computerChoice=generateComputerChoice();
    console.log("User choice      :-",userChoice);
    console.log("computer choice  :-",computerChoice);
    
    
    if(computerChoice===userChoice){
        console.log("draw game");
       
       msg.innerText="Game was draw";
       msg.style.backgroundColor="#000814";
    }else{
        if(userChoice==="paper"){
            if(computerChoice==="rock"){
                showWinner(true , userChoice,computerChoice);  
            }else{
                console.log("user lose ");
                showWinner(false, userChoice,computerChoice)
            }
        }else if(userChoice==="rock"){
            if(computerChoice==="scissor"){
                console.log("user win");
                showWinner(true, userChoice,computerChoice);
            }else{
                console.log("user lose ");
                showWinner(false, userChoice,computerChoice)
            }
        }else{
            if(computerChoice==="paper"){
                console.log("user win");
                showWinner(true, userChoice,computerChoice);
            }else{
                console.log("user lose ");
                showWinner(false, userChoice,computerChoice);
            }
        }
    }
    
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
        
    });
});