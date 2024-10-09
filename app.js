// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInEuro = valueInDollar/ oneEuroIs.USD
    let valueInYen = valueInEuro*oneEuroIs.JPY
    console.log(valueInYen)
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInEuro = valueInYen/ oneEuroIs.JPY
    let valueInPound = valueInEuro*oneEuroIs.GBP
    console.log(valueInPound)
    return valueInPound;
}
fromYenToPound(1)
fromDollarToYen(1)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromYenToPound, fromDollarToYen }

