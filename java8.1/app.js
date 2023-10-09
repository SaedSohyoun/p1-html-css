function optellen() {
    var getal1 = parseFloat(document.getElementById('getal1').value);
    var getal2 = parseFloat(document.getElementById('getal2').value);
    var resultaat = getal1 + getal2;
    document.getElementById('antwoord').textContent = 'Antwoord: ' + resultaat;
}

function aftrekken() {
    var getal1 = parseFloat(document.getElementById('getal1').value);
    var getal2 = parseFloat(document.getElementById('getal2').value);
    var resultaat = getal1 - getal2;
    document.getElementById('antwoord').textContent = 'Antwoord: ' + resultaat;
}

function vermenigvuldigen() {
    var getal1 = parseFloat(document.getElementById('getal1').value);
    var getal2 = parseFloat(document.getElementById('getal2').value);
    var resultaat = getal1 * getal2;
    document.getElementById('antwoord').textContent = 'Antwoord: ' + resultaat;
}

function delen() {
    var getal1 = parseFloat(document.getElementById('getal1').value);
    var getal2 = parseFloat(document.getElementById('getal2').value);
    
    if (getal2 === 0) {
        document.getElementById('antwoord').textContent = 'Antwoord: Kan niet delen door 0';
    } else {
        var resultaat = getal1 / getal2;
        document.getElementById('antwoord').textContent = 'Antwoord: ' + resultaat;
    }
}