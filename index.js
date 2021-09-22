var dice1= Math.floor(Math.random()*6)+1;

var dice2= Math.floor(Math.random()*6)+1;

var dice1Imgsrc="images/dice"+dice1+".png"

var dice2Imgsrc="images/dice"+dice2+".png"

document.querySelectorAll("img")[0].setAttribute("src",dice1Imgsrc);

document.querySelectorAll("img")[1].setAttribute("src",dice2Imgsrc);


if(dice1>dice2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}else if(dice2>dice1){
    document.querySelector("h1").innerHTML=" Play 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML="Draw";
}