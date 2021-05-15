function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var randomNumber1 = getRandomInt(6)+1;
var randomNumber2 = getRandomInt(6)+1;

var src1 = "images/dice"+randomNumber1+".png";
var src2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",src1);
document.querySelectorAll("img")[1].setAttribute("src",src2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins";
} else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins";
} else{
  document.querySelector("h1").innerHTML="Draw";
}
