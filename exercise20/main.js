var Notes;
(function (Notes) {
    Notes["A0"] = "./sounds/A0.mp3";
    Notes["A1"] = "./sounds/A1.mp3";
    Notes["A2"] = "./sounds/A2.mp3";
    Notes["A3"] = "./sounds/A3.mp3";
    Notes["A4"] = "./sounds/A4.mp3";
    Notes["A5"] = "./sounds/A5.mp3";
    Notes["A6"] = "./sounds/A6.mp3";
    Notes["A7"] = "./sounds/A7.mp3";
})(Notes || (Notes = {}));
function playNote(soundUrl) {
    new Audio(soundUrl).play();
}
