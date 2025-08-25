var data = document.querySelectorAll(".drum").length;
document.addEventListener("keypress", function (event) {
    playAudio(event.key);
    var but = document.querySelector("."+event.key)
    but.classList.add("pressed")
    setTimeout(function() {but.classList.remove("pressed")},100)
});
for (var i = 0; i < data; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        playAudio(this.innerHTML);
            var but = document.querySelector("."+this.innerHTML)
    but.classList.add("pressed")
    setTimeout(function() {but.classList.remove("pressed")},100)
    });
}
function playAudio(keyPressed) {
    switch (keyPressed) {
        case 'w':
            document.querySelector('.w').style.color = "green";
            setTimeout(function()
            {document.querySelector('.w').style.color="blueviolet"},100);
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            document.querySelector('.a').style.color = "green";
            setTimeout(function()
            {document.querySelector('.a').style.color="blueviolet"},100);
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            document.querySelector('.s').style.color = "green";
            setTimeout(function()
            {document.querySelector('.s').style.color="blueviolet"},100);
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            document.querySelector('.d').style.color = "green";
            setTimeout(function()
            {document.querySelector('.d').style.color="blueviolet"},100);
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            document.querySelector('.j').style.color = "green";
            setTimeout(function()
            {document.querySelector('.j').style.color="blueviolet"},100);
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            document.querySelector('.k').style.color = "green";
            setTimeout(function()
            {document.querySelector('.k').style.color="blueviolet"},100);
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            document.querySelector('.l').style.color = "green";
            setTimeout(function()
            {document.querySelector('.l').style.color="blueviolet"},100);
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
    }
}
