window.alert("Hello");

var but_Array = document.querySelectorAll(".drum");
var i = 0;
console.log(but_Array);

var tom_1 = new Audio("./sounds/tom-1.mp3");
var tom_2 = new Audio("./sounds/tom-2.mp3");
var tom_3 = new Audio("./sounds/tom-3.mp3");
var tom_4 = new Audio("./sounds/tom-4.mp3");
var snare = new Audio("./sounds/snare.mp3");
var crash = new Audio("./sounds/crash.mp3");
var kick = new Audio("./sounds/kick-bass.mp3");


while(i < but_Array.length){
    
    console.log(i);
    console.log(but_Array[i])
    but_Array[i].addEventListener("click", function(){ 
        var text = this.innerHTML;
        playSound(text);
        buttonAnimation(text);
    });

    i++;
}

document.addEventListener("keydown", function(event){playSound(event.key);buttonAnimation(event.key);});

function playSound(text){
    switch(text){
        case "w":
            tom_1.play();
            break;
        
        case "a":
            tom_2.play();
            break;

        case "s":
            tom_3.play();
            break;

        case "d":
            tom_4.play();
            break;

        case "j":
            snare.play();
            break; 

        case "k":
            crash.play();
            break;

        case "l":
            kick.play();
            break;
        
        default:
            console.log(text);      
    }   
}

function buttonAnimation(text){

    var activeButton = document.querySelector("."+text);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}
