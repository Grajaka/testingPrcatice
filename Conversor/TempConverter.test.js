const { convertTemp } = require('./TempConverter');

describe("Temperature Conversor from 0°C to 32° F", () => {

    test("Convert 0°C to 32°F", () => {

        expect (convertTemp(0, 'F')).toBe(32);
});

test("Convert 32°F to 0°C", () => {
    expect (convertTemp(32, 'C')).toBe(0);
});

 test("Selecting an invalid unit should throw an error", () => {
    expect(() => convertTemp(0, 'K')).toThrow("Invalid unit, please select either 'F' or 'C'");
 });

 test("Negative temperature conversion", () => {
    expect(convertTemp(-40, 'F')).toBe(-40);
 });

});