let array1 = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥑"];
console.log(array1.fill("🍺",4));

let array2 = ["🍕","🍕","🍍","🍕","🍕"];
console.log(array2.some(element => element == "🍍"));

array2.splice(2, 1);
console.log(array2);

let array3 = ["🍓","🍋","🍓","🍋","🍓"];
array3.forEach(element => {
    if(element == "🍓") {
        index = array3.indexOf(element);
        array3[index] = "🍄";
    }
});
console.log(array3);

let array4 =  ["🌶","🥛","🌶","🥛","🌶"];
let array5 = [];
array4.forEach(element => {
    array5.push(element);
    if(element === "🌶"){
        array5.push("🥵");
    }
}); // 0 => 1(0,cara)
console.log(array5);

let array6 = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
let array7 = [];
array6.forEach(element => {
    let lastCard = "";
    array7.push(element);
    if(element === "🎴"){
        if(lastCard === "🎴") {
            array7.push("🃏");
        }
        lastCard = element;
    }
});
console.log(array7);