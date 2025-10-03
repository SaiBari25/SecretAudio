let lowSound = new Audio("low.mp3");
let loudSound = new Audio("loud.mp3");

let low_Sound = new Audio("low.mp3"); // make sure low.mp3 is in the same folder
document.body.addEventListener("click", () => {
    lowSound.play();
});



lowSound.loop = true;
lowSound.volume = 0.1; // start quiet
loudSound.volume = 1.0; // loud

lowSound.play();

let volumeLevel = 0.1;
let message = document.getElementById("message");

// Gradually increase volume
let volumeInterval = setInterval(() => {
    if (volumeLevel < 0.7) {
        volumeLevel += 0.15; // faster increase (15% per step)
        lowSound.volume = volumeLevel;
        message.textContent = "The secret audio is going to play , the audio volume is low as it is a secret audio… Increase your volume... 🔊 Current: " + Math.round(volumeLevel * 100) + "%";
    } else {
        clearInterval(volumeInterval);
        message.textContent = "Volume is high! Get ready...";
        setTimeout(triggerExtremePhase, 1000); // less wait before prank
    }
}, 1000); // change to 1 second interval


function triggerExtremePhase() {
    lowSound.pause();
    loudSound.play();
    document.body.classList.add("flash");

    message.style.display = "none";
    let extremeMessage = document.getElementById("extremeMessage");
    extremeMessage.style.display = "block";

    let myConfetti = confetti.create(document.getElementById('confetti'), {
        resize: true,
        useWorker: true
    });

    myConfetti({
        particleCount: 300,
        spread: 160
    });

    // Continue flashing
    setTimeout(() => {
        document.body.classList.remove("flash");
    }, 10000);
}

