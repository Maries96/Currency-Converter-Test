

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect (fromEuroToDollar(3.5)).toBe(expected); 
})

test("One Dollar should be 127.9 Yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const Yen = fromDollarToYen(3.5)
    const expected = 3.5 * 127.9; 
     expect(fromDollarToYen(3.5)).toBe(expected);
})

test("One Yen should be 0.8 Pound", function(){
    const { fromYenToPound } = require('./app.js')
    const Pound = fromYenToPound(3.5)
    const expected = 3.5 * 0.8; 
     expect(fromYenToPound(3.5)).toBe(expected);
})