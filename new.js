const stone=document.getElementById("stone");
const paper=document.getElementById("Paper");
const scissors=document.getElementById("scissors");
const stonecomputer=document.getElementById("stone1");
const papercomputer=document.getElementById("Paper1");
const scissorscomputer=document.getElementById("scissors1");
const winner=document.getElementById("winner");
// const yourscore=document.getElementById("Your-Value");
// const Draw=document.getElementById("Draw-Value");
// const computerscore=document.getElementById("computer-Value");

var yourscore=0;
var Draw=0;
var computerscore=0;

document.getElementById("stonebtn").addEventListener("click" ,() => {
    let x = Math.floor((Math.random() * 3) + 1);
    stone.style.display="block";
    paper.style.display="none";
    scissors.style.display="none"
    if(x==1){
        stonecomputer.style.display="block";
        papercomputer.style.display="none";
        scissorscomputer.style.display="none";
        winner.innerHTML="Draw";
        Draw++;
        document.getElementById("Draw-Value").innerHTML=Draw;
        
    }else if(x==2){
        stonecomputer.style.display="none";
        papercomputer.style.display="block";
        scissorscomputer.style.display="none";
        winner.innerHTML="Computer Wins";
        computerscore++;
        document.getElementById("computer-Value").innerHTML=computerscore;
    }
    else if(x==3){
        stonecomputer.style.display="none";
        papercomputer.style.display="none";
        scissorscomputer.style.display="block";
        winner.innerHTML="You Wins";
        yourscore++;
        document.getElementById("Your-Value").innerHTML=yourscore;
    }
})
document.getElementById("paperbtn").addEventListener("click",()=>{
    let x = Math.floor((Math.random() * 3) + 1);
    stone.style.display="none";
     paper.style.display="block";
  scissors.style.display="none";
  if(x==1){
    stonecomputer.style.display="block";
    papercomputer.style.display="none";
    scissorscomputer.style.display="none";
    winner.innerHTML="You Win";
    yourscore++;
    document.getElementById("Your-Value").innerHTML=yourscore;
}else if(x==2){
    stonecomputer.style.display="none";
    papercomputer.style.display="block";
    scissorscomputer.style.display="none";
    winner.innerHTML="Draw";
    Draw++;
    document.getElementById("Draw-Value").innerHTML=Draw;
}
else if(x==3){
    stonecomputer.style.display="none";
    papercomputer.style.display="none";
    scissorscomputer.style.display="block";
    winner.innerHTML="Computer Wins";
    computerscore++;
    document.getElementById("computer-Value").innerHTML=computerscore;
}
  
})
document.getElementById("scissorbtn").addEventListener("click",()=>{
    let x = Math.floor((Math.random() * 3) + 1);
    stone.style.display="none";
   paper.style.display="none";
     scissors.style.display="block";
     if(x==1){
        stonecomputer.style.display="block";
        papercomputer.style.display="none";
        scissorscomputer.style.display="none";
        winner.innerHTML="Computer Win";
        computerscore++;
        document.getElementById("computer-Value").innerHTML=computerscore;
    }else if(x==2){
        stonecomputer.style.display="none";
        papercomputer.style.display="block";
        scissorscomputer.style.display="none";
        winner.innerHTML="You Win";
        yourscore++;
        document.getElementById("Your-Value").innerHTML=yourscore;
    }
    else if(x==3){
        stonecomputer.style.display="none";
        papercomputer.style.display="none";
        scissorscomputer.style.display="block";
        winner.innerHTML="Draw";
        Draw++;
        document.getElementById("Draw-Value").innerHTML=Draw;
    }
})