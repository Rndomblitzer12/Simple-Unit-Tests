const mathUtils = require('./math.js');

const testVars = {
    max: 100,
    min: 0
};

describe('add()', () => {
    test('finds the sum of two numbers', () => {
        expect(mathUtils.add(5, 10)).toBe(15);
    });

    test('should clamp number to max', () => {
        expect(mathUtils.add(testVars.max, 5)).toBe(testVars.max);
    });

    test('should clamp number to min', () => {
        expect(mathUtils.add(testVars.min, -5)).toBe(testVars.min);
    });
      
})

describe('sub()', () => {
    test('finds the difference of two numbers', () => {
        expect(mathUtils.sub(10, 5)).toBe(5);
    });

    test('should clamp number to min', () => {
        expect(mathUtils.sub(1, 5)).toBe(testVars.min);
    });
})


describe('multiply()', () => {
    test('finds product of two numbers', () => {
        expect(mathUtils.mul(5,10)).toBe(50);
    });

    test('clamps first input to max', () => {
        expect(mathUtils.mul(testVars.max + 1, testVars.max))
            .toBe(testVars.max * testVars.max);
    });

    test('clamps second input to max', () => {
        expect(mathUtils.mul(testVars.max, testVars.max + 1))
            .toBe(testVars.max * testVars.max);
    });

    test('clamps first input to min', () => {
        expect(mathUtils.mul(testVars.min - 1, testVars.min))
            .toBe(testVars.min * testVars.min);
    });

    test('clamps second input to min', () => {
        expect(mathUtils.mul(testVars.min, testVars.min - 1))
            .toBe(testVars.min * testVars.min);
    });




})


