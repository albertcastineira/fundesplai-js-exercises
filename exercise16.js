let on = false;

$(".btn").on( "click", function() {
    if(on) {
        turnOffLigth();
        on = false;
    } else {
        turnOnLigth();
        on = true;
    }
});


function turnOnLigth() {
    $(".btn").attr("src", "./assets/bulb/bon.jpg");
    $(".bulb").attr("src", "./assets/bulb/on.jpg");
}

function turnOffLigth() {
    $(".btn").attr("src", "./assets/bulb/boff.jpg");
    $(".bulb").attr("src", "./assets/bulb/off.jpg");
}