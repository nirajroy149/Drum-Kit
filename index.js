
$("button").click(play);


// for click 
function play() {
    playaudio(this.innerHTML);
}

//for keyboard press
document.addEventListener("keydown", function (event) {
    playaudio(event.key);  
})

function animatebutton(key) {
    $("." + key).addClass("pressed");
    setTimeout(function(){
        $("." + key).removeClass("pressed");
    },100);
}
function playaudio(key) {

    let audio = new Audio();
    let src = "";

    switch (key) {
        case "w":
            src = "tom-1.mp3";animatebutton("w");
            break;
        case "a":
            src = "tom-2.mp3";animatebutton("a");
            break;
        case "s":
            src = "tom-3.mp3";animatebutton("s");
            break;
        case "d":
            src = "tom-4.mp3";animatebutton("d");
            break;
        case "j":
            src = "crash.mp3";animatebutton("j");
            break;
        case "k":
            src = "kick-bass.mp3";animatebutton("k");
            break;
        case "l":
            src = "snare.mp3";animatebutton("l");
            break;
        default:
            console.log("Not found");
            break;
    }
    audio.src = "sounds/" + src;
    audio.play();
}

