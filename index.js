
$("button").click(play);

function play(){

    playaudio(this.innerHTML);
}

function playaudio(key){

    let audio = new Audio();
    let src ="";

    switch(key){
        case "w":
            src = "tom-1.mp3";
            break;
        case "a":
            src = "tom-2.mp3";
            break;
        case "s":
            src = "tom-3.mp3";
            break;
        case "d":
            src = "tom-4.mp3";
            break;
        case "j":
            src = "crash.mp3";
            break;
        case "k":
            src = "kick-bass.mp3";
            break;
        case "l":
            src = "snare.mp3";
            break;
        default:
            console.log("not found");
            break;
    }
    audio.src = "sounds/" + src;
    audio.play();
}

