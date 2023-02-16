
// this is my function that sums two numbers
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 127.9;
    //return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.8;
    //return the dollar value
    return valueInPound;
}


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};

