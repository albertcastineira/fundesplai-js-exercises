$("#redBtnSwitch").on( "click", function() {
    if ($("#text").css("color") == "rgb(0, 0, 0)") {
        $("#text").css("color","red");
    } else {
        $("#text").css("color","black");
    }
    
});

$("#blueBtnSwitch").on( "click", function() {
    if ($("#text").css("color") == "rgb(0, 0, 0)") {
        $("#text").css("color","blue");
    } else {
        $("#text").css("color","black");
    }
    
});