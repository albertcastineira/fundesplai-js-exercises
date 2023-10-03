function coinToss() {
    coinResult = Math.round(Math.random());
    if (coinResult == 1) {
        console.log("Head");
    } else {
        console.log("Tail");
    }
}

coinToss();