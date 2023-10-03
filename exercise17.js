// Stats
let hungriness = 100;
let strength = 10;
let happiness = 100;
let sleep = 100;

// BarNames
const barNames = {
    Hungriness: "hungrinessBar",
    Strenght: "strengthBar",
    Happiness: "happinessBar",
    Sleep: "sleepBar"
}

// Actions
const Food = {
    Carrot: 10,
    Apple: 12,
    IceCream: 7
} 

const Activities = {
    Games: 20,
    Sports: 40,
    Read: 30
}

const PhysicalActivites = {
    WeightTraining: 5,
    Running: 2,
}

const RestingActivities = {
    Sleep: 50,
    Sofa: 15
}

// Utils
function getRandomNum() {
    return Math.floor((Math.random()*20) + 1);
}

function doRandomEvent() {
    let rndm = Math.floor((Math.random()*10) +1);
    setTimeout(function(){
        decreaseRandomStat();
    }, rndm*500);
    
}

function decreaseRandomStat() {
    let rndm = Math.floor((Math.random()*2) +1);
    switch (rndm) {
        case 1:
            var rndmDecreaseVal = getRandomNum();
            var result = happiness - rndmDecreaseVal;
            if(result > 0) {
                happiness = result;
            } else {
                happiness = 0;
            }
            updateBarState(barNames.Happiness,happiness);
            break;
        case 2:
            var rndmDecreaseVal = getRandomNum();
            var result = hungriness - rndmDecreaseVal;
            if(result > 0) {
                hungriness = result;
            } else {
                hungriness = 0;
                happiness = 0;
                strength = 0;
                sleep = 0;
                $("#tamagochiText").text("Fluffy is dead.");
                $("#tamagochiIcon").css("display","none");
            }
            updateBarState(barNames.Hungriness,hungriness);
            break;

        default:
            break;
    }
}

function doEatFood(food) {
    hungriness += food;
    if(hungriness >= 100) {
        hungriness = 100;
    }
    updateBarState(barNames.Hungriness,hungriness);

}

function doPhysicalExercise(exercise) {
    if(strength < 100 && sleep > 0) {
        strength += exercise;
        sleep -= exercise * 4;
        if(sleep < 0) {
            sleep = 0;
        }
        updateBarState(barNames.Strenght,strength);
        updateBarState(barNames.Sleep,sleep);
    }
    
}

function doRest(RestingActivity) {
    if(sleep < 100) {
        sleep += RestingActivity;
        if(sleep > 100) {
            sleep = 100;
        }
        updateBarState(barNames.Sleep,sleep);
    } else {
        sleep = 100;
        updateBarState(barNames.Sleep,sleep);
    }
}

function doActivity(activity) {
    if(sleep <= 0) {
        sleep = 0;
        updateBarState(barNames.Sleep,sleep);
    } else {
        sleep -= activity * 3;
        if(happiness < 100) {
            happiness += activity;
        } else if(happiness == 100) {
            happiness = 100;
        }
        updateBarState(barNames.Happiness,happiness);
        updateBarState(barNames.Sleep,sleep);
    }
    
}

function updateBarState(barId,newValue) {
    barId = `#${barId}`;
    batTextId =`${barId}Text`;
    var percentageText = `${barId}Text`;
    let newWidth = `${newValue}%`;
    $(barId).css('width', newWidth);
    $(barId).addClass("attentionAnimationC");
    $(batTextId).addClass("attentionAnimationC");
    setTimeout(function(){
        $(barId).removeClass("attentionAnimationC");
        $(batTextId).removeClass("attentionAnimationC");
    }, 2000);
    $(percentageText).text(`${newValue}%`);

}

// Time random events
var intervalId = window.setInterval(function(){
    if(happiness <= 0) {
        $("#tamagochiText").text("Fluffy is sad.");
    } else {
        $("#tamagochiText").text("Fluffy");
    }
    doRandomEvent();
}, 10000);

// Buttons
$( "#carrotBtn" ).on( "click", function() {
    doEatFood(Food.Carrot);
});

$( "#appleBtn" ).on( "click", function() {
    doEatFood(Food.Apple);
});

$( "#iceCreamBtn" ).on( "click", function() {
    doEatFood(Food.IceCream);
});

$( "#gamesBtn" ).on( "click", function() {
    doActivity(Activities.Games);
});

$( "#sportBtn" ).on( "click", function() {
    doActivity(Activities.Sports);
});

$( "#readBtn" ).on( "click", function() {
    doActivity(Activities.Read);
});

$( "#weightTrainingBtn" ).on( "click", function() {
    doPhysicalExercise(PhysicalActivites.WeightTraining);
});

$( "#runningBtn" ).on( "click", function() {
    doPhysicalExercise(PhysicalActivites.Running);
});

$( "#sleepBtn" ).on( "click", function() {
    doRest(RestingActivities.Sleep);
});

$( "#sofaBtn" ).on( "click", function() {
    doRest(RestingActivities.Sofa);
});



// Load current bar values
updateBarState(barNames.Hungriness,hungriness);
updateBarState(barNames.Happiness,happiness);
updateBarState(barNames.Strenght,strength);
updateBarState(barNames.Sleep,sleep);



