let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"]
let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game is started !");
        started=true;

        levelUp();
    }
})



function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}



function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);

}


function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
      

        h2.innerHTML=`Game Over ! Your score is <b>${level}</b>    </br> Press any key to start`;

        document.querySelector("body").style.backgroundImage="url(' /JavaScript/JS Project/simon/redImage.avif ')";

        setTimeout(function(){
            document.querySelector("body").style.backgroundImage="url(' /JavaScript/JS Project/simon/image.jpg ')";
        },150);


        reset();
       
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);

}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}



let x=0;
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];

    if(level>x){
        x=level;
    }

    let h3=document.querySelector('h3');
    h3.innerText=`Highest score is  ${x}`;

    level=0;

  
}