enum Notes {
    A0 = "./sounds/A0.mp3",
    A1 = "./sounds/A1.mp3",
    A2 = "./sounds/A2.mp3",
    A3 = "./sounds/A3.mp3",
    A4 = "./sounds/A4.mp3",
    A5 = "./sounds/A5.mp3",
    A6 = "./sounds/A6.mp3",
    A7 = "./sounds/A7.mp3"
}

function playNote(soundUrl: string): void {
    new Audio(soundUrl).play();
}