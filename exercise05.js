function getMonth(monthNumber) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
    return months[monthNumber - 1];
}

monthName = getMonth(5);
console.log(monthName);

function getNumberFromWord(word) {
    switch (word) {
        case "one":
        return 1;
        break;

        case "two":
        return 2;
        break;

        case "three":
        return 3;
        break;
        
        case "four":
        return 4;
        break;
        
        case "five":
        return 5;
        break;
    
        default:
            break;
    }
}

console.log(getNumberFromWord("four"));