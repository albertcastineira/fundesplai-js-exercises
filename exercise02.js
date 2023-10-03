const myself = () => {
    return "Albert Castiñeira Aranda";
}

console.log(myself());

function booleanFunction(boolean) {
    console.log(boolean)
}

var bool = true;
booleanFunction(bool);

function inifiteParams(...params) {
    params.forEach(element => {
        console.log(element);
    });
}

inifiteParams(1,2,3,4,5);