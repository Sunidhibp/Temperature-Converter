function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return ((fahrenheit - 32) * 5/9) + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9/5) + 32;
}
function updateResult() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const resultElement = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    if (!isNaN(temperature)) {
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        let result = 0;

        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            result = celsiusToFahrenheit(temperature).toFixed(2);
        } else if (fromUnit === "celsius" && toUnit === "kelvin") {
            result = celsiusToKelvin(temperature).toFixed(2);
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            result = fahrenheitToCelsius(temperature).toFixed(2);
        } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            result = fahrenheitToKelvin(temperature).toFixed(2);
        } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            result = kelvinToCelsius(temperature).toFixed(2);
        } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            result = kelvinToFahrenheit(temperature).toFixed(2);
        } else {
            result = temperature.toFixed(2);
        }

        resultElement.textContent = result;
    } else {
        resultElement.textContent = "Invalid input";
    }
}
document.getElementById("convert").addEventListener("click", updateResult);
