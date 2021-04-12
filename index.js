var btnMe = document.querySelectorAll(".drum");
for (var i = 0; i < btnMe.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", btnPre);
}

function btnPre() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
 pressedBtn(buttonInnerHTML);

}

document.addEventListener("keypress",checkS);             // Call back Function Imp Topic


function checkS(event){                             // Call back Function Imp Topic

makeSound(event.key);
pressedBtn(event.key);
}

function makeSound(key){

  switch (key) {
    case "w":
      var audioSrce1 = new Audio('sounds/tom-1.mp3');
      audioSrce1.play();
      break;
    case "a":
      var audioSrce2 = new Audio('sounds/tom-2.mp3');
      audioSrce2.play();
      break;
    case "s":
      var audioSrce3 = new Audio('sounds/tom-3.mp3');
      audioSrce3.play();
      break;
    case "d":
      var audioSrce4 = new Audio('sounds/tom-4.mp3');
      audioSrce4.play();
      break;
    case "j":
      var audioSrce5 = new Audio('sounds/crash.mp3');
      audioSrce5.play();
      break;
    case "k":
      var audioSrce6 = new Audio('sounds/kick-bass.mp3');
      audioSrce6.play();
      break;
    case "l":
      var audioSrce7 = new Audio('sounds/snare.mp3');
      audioSrce7.play();
      break;
    default:
      console.log("fff");

  }
}

// var audioSrce=new Audio('prescre.mp3');
// audioSrce.play();
function pressedBtn(currentKey){
  var mainKey = document.querySelector("."+ currentKey);
  mainKey.classList.add("pressed");
  setTimeout(function(){
    mainKey.classList.toggle("pressed")}, 0100);
}
