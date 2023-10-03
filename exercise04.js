function sum(a,b,c) {
    return a + b + c;
}

console.log(sum(3,9,2));

function user(name,surname1,surname2) {
    console.log(`${name} ${surname1} ${surname2}`);
}

user("Albert","Castiñeira","Aranda");

function getBiggerNum(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(getBiggerNum(12,43));