var expect = require("chai").expect;
var c = require('../routes/calculate.js');

/**
 * Test scenarios
 * Positive & Negative are two main division
 * Positive test scenarios are addition, subtraction, multiplication, division
 * Digits with no operations possible, empty values provided, non roman numerals
 */
describe("Equation creator is ", function () {
    describe("Takes three positive inputs and provides the equation", function () {
        it("Create the equation for addition", function () {
            var a1 = c.equation('X', 'M', '+');
            var a2 = c.equation('XV', 'C', '+');
            expect(a1).to.equal('MX');
            expect(a2).to.equal('CXV');
        });
        it("Create the equation for subtraction", function () {
            var s1 = c.equation('L', 'XX', '-');
            var s2 = c.equation('CC', 'D', '-');
            expect(s1).to.equal('XXX');
            expect(s2).to.equal('-CCC');
        });
        it("Create the equation for multiplication", function () {
            var m1 = c.equation('M', 'X', '*');
            var m2 = c.equation('C', 'M', '*');
            expect(m1).to.equal('MMMMMMMMMM');
            expect(m2).to.equal('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM');
        });
        it("Create the equation for division", function () {
            var m1 = c.equation('C', 'M', '/');
            var m2 = c.equation('D', 'C', '/');
            var m3 = c.equation('MM', 'D', '/');
            expect(m1).to.equal('I');
            expect(m2).to.equal('V');
            expect(m3).to.equal('IV');
        });
        it("Create the equation for non numerics, non roman numerics & special characters", function () {
            var nr1 = c.equation('ret', 'poy', 'abv');
            var nr2 = c.equation('rr', '##', '&&');
            expect(nr1).to.equal('Please enter valid operator');
            expect(nr2).to.equal('Please enter valid operator');
        });
    })
    describe("Takes three neagtive inputs and provides the equation", function () {
        it("Negative inputs as roman numericals", function () {
            var nn1 = c.equation('-CX', 'M', '-');
            var nn2 = c.equation('-XX', '-D', '*');
            expect(nn1).to.equal('Please enter valid operands');
            expect(nn2).to.equal('Please enter valid operands');
        });
    });
});
