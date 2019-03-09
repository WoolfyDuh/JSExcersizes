const input = document.getElementById('celcius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');
const button = document.getElementById('myButton');
const input2 = document.getElementById('kelvin2');
const celcius = document.getElementById('celcius2');
const fahrenheit2 = document.getElementById('fahrenheit2');
const button2 = document.getElementById('myButton2');


var bFahrenheit;
var bFahrenheit2;
var bKelvin;
var bCelcius;


button.addEventListener('click', () => {
bFahrenheit = 9 * parseInt(input.value) / 5 + 32;
fahrenheit.innerHTML = "Graden Fahrenheit: " + bFahrenheit;
bKelvin = parseInt(input.value) + 273;
kelvin.innerHTML = "Graden Kelvin: " + bKelvin;
});

button2.addEventListener('click', () => {
bFahrenheit2 = 1.8 * parseInt(input2.value) - 459.67;
fahrenheit2.innerHTML = "Graden Fahrenheit: " + bFahrenheit2;
bCelcius = parseInt(input2.value) - 273;
celcius2.innerHTML = "Graden Celcius: " + bCelcius;
});
