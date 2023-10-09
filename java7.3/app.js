var getalElement = document.getElementById('getal');
var verhoogKnop = document.getElementById('verhoogKnop');

var huidigGetal = 0;

verhoogKnop.addEventListener('click', function() {
    huidigGetal++;
if (huidigGetal > 10) {
    huidigGetal = 0;
}

getalElement.textContent = huidigGetal;
});