const input = document.getElementById('lengte');
const input2 = document.getElementById('breedte');
const oppervlakte = document.getElementById('myOppervlakte');
const omtrek = document.getElementById('myOmtrek');
const button = document.getElementById('myButton');
const diagonaal = document.getElementById('myDiagonaal');

let bOpp;
let bOmt;
let kDia;
let bDia;

button.addEventListener('click', () => {
bOpp = parseInt(input.value) * parseInt(input2.value);
oppervlakte.innerHTML = "Oppervlakte: " + bOpp;
bOmt = 2 * parseInt(input.value) + 2 * parseInt(input2.value);
omtrek.innerHTML = "Omtrek: " + bOmt;
kDia = Math.pow(parseInt(input.value), 2) + Math.pow(parseInt(input2.value), 2);
bDia = Math.sqrt(kDia);
diagonaal.innerHTML = "Diagonaal: " + bDia;
});
