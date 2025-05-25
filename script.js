
function setBackgroundByOrientation() {
    const isPortrait = window.innerHeight > window.innerWidth;
    document.body.style.backgroundImage = isPortrait 
        ? "url('background_vertikal.png')" 
        : "url('background_landscape.png')";
}

window.addEventListener("resize", setBackgroundByOrientation);
window.addEventListener("load", setBackgroundByOrientation);
