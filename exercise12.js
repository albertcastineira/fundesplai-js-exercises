let mainArrayText = document.getElementById("mainArray");
let errorMsgText = document.getElementById("errorMsg");

let mainArray = [];
let emotes = [
    "😀","👩‍🦰","🎟","🎗","👓","🥙","🍱","🍙","🍟","🧇","🛒"
]

let pushBtn = document.getElementById("pushBtn");
let unshiftBtn = document.getElementById("unshiftBtn");
let insertAtBtn = document.getElementById("insertAtBtn");
let insertAtNum = document.getElementById("insertAtNum");

let popBtn = document.getElementById("popBtn");
let shiftBtn = document.getElementById("shiftBtn");
let removeAtBtn = document.getElementById("removeAtBtn");
let removeAtNum = document.getElementById("removeAtNum");

function updateMainArrayText(value) {
    mainArrayText.innerText = value.join("");
}

function updateErrorMsg(value) {
    errorMsgText.innerText = value;
}

function clearErrorMsg() {
    errorMsgText.innerHTML = "";
}

function getRandomEmote() {
    rndm = Math.floor(Math.random() * emotes.length);
    return emotes[rndm];
}

$(pushBtn).on( "click", function() {
    pushToArray(mainArray,getRandomEmote());
    updateMainArrayText(mainArray);
});

$(unshiftBtn).on( "click", function() {
    unshiftToArray(mainArray,getRandomEmote());
    updateMainArrayText(mainArray);
});

$(insertAtBtn).on( "click", function() {
    insertAtArray(mainArray,insertAtNum.value,getRandomEmote());
    updateMainArrayText(mainArray);
});

$(popBtn).on( "click", function() {
    popToArray(mainArray);
    updateMainArrayText(mainArray);
});

$(shiftBtn).on( "click", function() {
    shiftToArray(mainArray);
    updateMainArrayText(mainArray);
});

$(removeAtBtn).on( "click", function() {
    clearErrorMsg();
    removeAtArray(mainArray,removeAtNum.value);
    updateMainArrayText(mainArray);
});

function pushToArray(array,value) {
    clearErrorMsg();
    array.push(value);
}

function unshiftToArray(array,value) {
    clearErrorMsg();
    array.unshift(value);
}

function insertAtArray(array,position,value) {
    clearErrorMsg();
    if(position > array.length) {
        updateErrorMsg("This position is out of range!");
    } else {
        mainArray.splice(position, 0, value);
    }
}

function popToArray(array) {
    clearErrorMsg();
    array.pop();
}

function shiftToArray(array) {
    clearErrorMsg();
    array.shift();
}

function removeAtArray(array,position) {
    clearErrorMsg();
    if(position >= array.length) {
        updateErrorMsg("This position is out of range!");
    }
    array.splice(position, 1);
}