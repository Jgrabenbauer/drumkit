
var drumButtons = document.querySelectorAll(".drum");

function playSound(key) {
  switch (key) {
    case "w":
      var tom1Audio = new Audio("sounds/tom-1.mp3");
      tom1Audio.play();
      break;
    case "a":
      var tom2Audio = new Audio("sounds/tom-2.mp3");
      tom2Audio.play();
      break;
    case "s":
      var tom3Audio = new Audio("sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    case "d":
      var tom4Audio = new Audio("sounds/tom-4.mp3");
      tom4Audio.play();
      break;
    case "j":
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;
    case "k":
      var kickBassAudio = new Audio("sounds/kick-bass.mp3");
      kickBassAudio.play();
      break;
    case "l":
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;
    default:
      console.log(key);
  }
}


for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function() {

    var innerButtonHTML = this.innerHTML;
    playSound(innerButtonHTML);

  })
}

document.addEventListener("keydown", function(event) {
  var key = event.key;
  playSound(key);
})
