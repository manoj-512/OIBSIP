function convertTo() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let outputValue;

    if (isNaN(inputTemp)) {
        document.getElementById("outputValue").innerText = "Please enter a valid number.";
        return;
    }

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            outputValue = (inputTemp * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            outputValue = inputTemp + 273.15;
        } else {
            outputValue = inputTemp;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            outputValue = (inputTemp - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            outputValue = (inputTemp - 32) * 5/9 + 273.15;
        } else {
            outputValue = inputTemp;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            outputValue = inputTemp - 273.15;
        } else if (toUnit === "fahrenheit") {
            outputValue = (inputTemp - 273.15) * 9/5 + 32;
        } else {
            outputValue = inputTemp;
        }
    }

    document.getElementById("outputValue").innerText = `Converted temperature: ${outputValue.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}
