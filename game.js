
var box = ["red","green","yellow","blue"];
var level = 0;
var gamePattern = [];
var started = "true";
var userClickedPattern = [];
var numberofbuttons = document.querySelectorAll(".btn").length;
var currentLevel = 0;
var test;
document.addEventListener("keypress",function (event) {
     if (started === "true") {

     document.querySelector("#level-title").style.color = "white";
     nextSequence();

     }

});

function nextSequence() {

    userClickedPattern = [];
    level++
    currentLevel++
   document.querySelector("#level-title").innerHTML = "level "+level;
   var randomnumber = Math.round((Math.random() * 4)- 0.5 );
   var randombox = box[randomnumber];
     gamePattern.push(randombox);
   animation(randombox);
   sound(randombox);
    started = "false" ;

     test = "adtfa";

}

for (var f = 0; f <numberofbuttons ; f++) {


       document.querySelectorAll(".btn")[f].addEventListener("click",function (event) {
       userClickedPattern.push(this.id);


        animation(this.id);
        sound(this.id);

         checksolution();

});
}


function gameover() {
  sound("wrong");
  setTimeout(function () {
    document.querySelector("#level-title").innerHTML = "press any key to start again";
  },1000)
  document.querySelector("#level-title").style.color = "red";
  document.querySelector("#level-title").innerHTML = "game over";



    gamePattern = [];
      level = 0;
      currentLevel = 0;
    userClickedPattern = [];
    started = "true";
    test = "ahc";
}

function animation(randombox) {
  if (randombox=='red') {
    document.querySelector('.red').classList.toggle("pressed");
    setTimeout(function () {
      document.querySelector('.red').classList.toggle("pressed");
    }, 100)
  }
  else if (randombox=="green") {
    document.querySelector(".green").classList.toggle("pressed");
    setTimeout(function () {
      document.querySelector('.green').classList.toggle("pressed");
    }, 100)
  }
  else if (randombox=="yellow") {
    document.querySelector(".yellow").classList.toggle("pressed");
    setTimeout(function () {
      document.querySelector('.yellow').classList.toggle("pressed");
    }, 100)
  }
  else if (randombox=="blue") {
    document.querySelector(".blue").classList.toggle("pressed");
    setTimeout(function () {
      document.querySelector('.blue').classList.toggle("pressed");
    }, 100)
  }
}



function checksolution() {
    testing();
   if (test === "true") {
     if (gamePattern.length === userClickedPattern.length) {
       setTimeout(function () {
         nextSequence();
         userClickedPattern = [];
       }, 1000);
     }
   }else if (test === "false") {
     gameover();
   }

}


function testing() {
  for (var i = 0; i < userClickedPattern.length; i++) {

     if (gamePattern[i] === userClickedPattern[i]){
        test = "true";
     }
   else if (gamePattern[i] != userClickedPattern[i]) {
       test = "false";
   }

}
}


function sound(block) {

   switch (block) {
     case "blue":
       var blue = new Audio("blue.mp3");
        blue.play();
       break;

       case "red":
         var red = new Audio("red.mp3");
          red.play();
         break;

         case "yellow":
           var yellow = new Audio("yellow.mp3");
            yellow.play();
           break;

           case "green":
             var green = new Audio("green.mp3");
              green.play();
             break;

             case "wrong":
               var wrong = new Audio("wrong.mp3");
                wrong.play();
               break;


     default:


   }
}
