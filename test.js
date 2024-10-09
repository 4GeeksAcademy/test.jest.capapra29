test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("One dollar should be 146.26168224299064 Yenes ", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    
    // This is the comparison for the unit test
     expect(fromDollarToYen(1)).toBe(146.26168224299064); 
})
test("One yen should be 0.0055591054313099035 Pound ", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    
    // This is the comparison for the unit test
     expect(fromYenToPound(1)).toBe(0.0055591054313099035); 
})