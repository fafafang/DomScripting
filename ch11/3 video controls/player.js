function createVideoControls() {
    let vids = document.getElementsByTagName("video");
    for (let vid of vids) {
        addControls(vid);
    }
}

function addControls(vid) {
    vid.removeAttribute("controls");

    vid.width = vid.videoWidth;
    vid.height = vid.videoHeight;
    vid.parentNode.style.width = vid.videoWidth + "px";
    vid.parentNode.style.height = vid.videoHeight + "px";

    let controls = document.createElement("div");
    controls.setAttribute("class", "controls");
    let play = document.createElement("button");
    play.setAttribute("title", "play");
    play.innerHTML = "&#x25BA;";
    play.onclick = function() {
        if (vid.ended) {
            vid.currentTime = 0;
        }
        if (vid.paused) {
            vid.play();
        } else {
            vid.pause();
        }
    }
    vid.addEventListener("play", function() {
        play.innerHTML = "&#x2590;&#x2590;";
        play.setAttribute("paused", "true");
    }, false);
    vid.addEventListener("pause", function() {
        play.innerHTML = "&#x25BA;";
        play.removeAttribute("paused");
    }, false);
    controls.appendChild(play);
    vid.parentNode.appendChild(controls);
}

window.onload = function() {
    createVideoControls();
}