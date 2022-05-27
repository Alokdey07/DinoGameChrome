let container = document.querySelector("container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");


// declaring variable for score

let interval = null;
let playerScore = 0;

// function for scorre
let scoreCounter = ()=> {
    playerScore++;
    score.innerHTML = 'score <b>${playerScore}</b>' ;
}
//start game
//interval = setInterval(scoreCounter,200);

window.addEventListener("keydown" , (start)=>{
     // console.log(start);
     if(start.code == "Space")
     {
         gameOver.style.display = "none";
         block.classList.add("blockActive");
         road.firstElementChild.style.animation = "roadAnimate 1.5 linear infinite";
         cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

         //score
         let playerScore = 0;
     }
})
