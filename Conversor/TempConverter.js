function convertTemp(value, selectedUnit) {

    if (selectedUnit !== "F" && selectedUnit !== "C") {
        throw new Error("Invalid unit, please select either 'F' or 'C'");
    }


    let result = (selectedUnit === "F") 
        ? (value * 9/5) + 32 
        : (value - 32) / 1.8;

    return Math.round(result * 100) / 100;
}

module.exports = { convertTemp };