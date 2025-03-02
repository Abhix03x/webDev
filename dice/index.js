let randomNumber1 = Math.floor((Math.random()*6)+1);
let ranimg = "dice" + randomNumber1 + ".png";
let imsrc = "images/" + ranimg ;
let image = document.querySelectorAll("img")[0];
image.setAttribute("src",imsrc);
let randomNumber2 = Math.floor((Math.random()*6)+1);
let ranimg1 = "dice" + randomNumber2 + ".png";
let imsrc1 = "images/" + ranimg1 ;
let image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",imsrc1);

// if(randomNumber1==1){
//     document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
// }
// else if(randomNumber1==2){
//     document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
// }
// else if(randomNumber1==3){
//     document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
// }
// else if(randomNumber1==4){
//     document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
// }
// else if(randomNumber1==5){
//     document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
// }
// else{
//    document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
// }
// if(randomNumber2==1){
//     document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
// }
// else if(randomNumber2==2){
//     document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
// }
// else if(randomNumber2==3){
//     document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
// }
// else if(randomNumber2==4){
//     document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
// }
// else if(randomNumber2==5){
//     document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
// }
// else{
//    document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
// }

// let num = document.querySelector("img.img1").getAttribute("src");
// let num1 = document.querySelector("img.img2").getAttribute("src");
if(randomNumber1==randomNumber2){
    document.querySelector("div h1").innerHTML="Draw";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("div h1").innerHTML="Player1 wins";

}
else
document.querySelector("div h1").innerHTML="Player2 wins";
