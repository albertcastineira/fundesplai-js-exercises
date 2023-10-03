$(".card").mouseover(function() {
    $(this).attr("src", "./assets/cards/card-front.png");
}).mouseout(function() {
    $(this).attr("src", "./assets/cards/card-back.png");
});