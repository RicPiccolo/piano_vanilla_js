const pianoButtons = document.querySelectorAll('.container > div > kbd');
let pianoChords = [];
pianoButtons.forEach(element => pianoChords.push(element.innerHTML));
document.addEventListener('keydown', playKey);
function playKey(e) {
    if (pianoChords.includes(e.key.toUpperCase())){
        // console.log(`Key '${e.key.toUpperCase()}' is pressed`);
        let pianoSound = new Audio(`${e.key}.mp3`);
        pianoSound.play();
    } else {
        console.warn(`Key '${e.key}' is pressed. This key is not included in board`);
    }
}