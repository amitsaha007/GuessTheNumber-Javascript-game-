//again button
let again = document.querySelector(".btn.again");
again.addEventListener("click", ()=>{
    location.reload();
});
again.innerHTML = "lets play again!!!";

//taking a rando number
let randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum);

let count = 0;
let score = 0;

let highScore = sessionStorage.getItem("highScore") || 0;
document.querySelector(".highscore").innerHTML = highScore;

//HighScore value initiated outside the EventListener for implementing Closure
// let highScore = sessionStorage.getItem('highScore') || 0;
// document.getElementsByClassName('highscore')[0].innerHTML = highScore;

let checkBtn = document.querySelector(".btn.check");
checkBtn.addEventListener("click", ()=>{
    let userNum = parseInt(document.getElementsByClassName("guess")[0].value);
    console.log(userNum);

        count++;
        score = 20-count;
        if(score >= 0){
        document.querySelector(".score").innerHTML= score;
        }
        else{
            document.querySelector(".score").innerHTML=  "Disappointing, the number is "+ randomNum;
            document.body.style.backgroundColor= "maroon";
        }

    if(randomNum>userNum){
        document.querySelector(".message").innerHTML="The number is too low!";
 

    }
    else if(userNum>randomNum){
        document.querySelector(".message").innerHTML="The number is too big!";


    }
    else{
        document.querySelector(".message").innerHTML="Bingoo!!!!";
        document.querySelector(".number").innerHTML= randomNum;
        document.body.style.backgroundColor= "green";

        

        if (score >= highScore){
            highScore = score;
            document.querySelector(".highscore").innerHTML= highScore;
            sessionStorage.setItem("highScore", highScore);
        }

    }
})










