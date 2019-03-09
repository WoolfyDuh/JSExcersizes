const input = document.getElementById('giveVar');
const opp = document.getElementById('myOppervlakte');
const omt = document.getElementById('myOmtrek');
const button = document.getElementById('myButton');

var oppBer;
var omtBer;

button.addEventListener('click', () => {
oppBer = Math.pow(parseInt(input.value), 2) * Math.PI;
opp.innerHTML = "Oppervlakte: " + oppBer;
omtBer = 2 * parseInt(input.value) * Math.PI;
omt.innerHTML = "Omtrek: " + omtBer;
});
