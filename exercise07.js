function replaceAtoO(word) {
    return word.toLowerCase().replace("a","o");
}

console.log(replaceAtoO("pato"));

function startsWithAca(word) {
    return (word.startsWith("aca"));
}


console.log(startsWithAca("academia"));
console.log(startsWithAca("escuela"));

function sayHello(hello) {
    console.log(hello.toUpperCase());
    console.log(hello.toLowerCase());
    console.log(`Hey there, ${hello} ${hello.length}`);
}

sayHello("Hello")