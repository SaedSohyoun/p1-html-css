function optellen() {
    let getal1 = parseFloat(document.getElementById('getal1').value);
    let getal2 = parseFloat(document.getElementById('getal2').value);

    if (getal1 > 0 && getal2 > 0) {
        let resultaat = getal1 + getal2;
        document.getElementById('antwoord').textContent = 'Antwoord: ' + resultaat;
    } else {
        document.getElementById('antwoord').textContent = 'Het getal is te laag';
    }
}

function aftrekken() {
    let getal1 = parseFloat(document.getElementById('getal1').value);
    let getal2 = parseFloat(document.getElementById('getal2').value);

    if (getal1 > 0 && getal2 > 0) {
        var resultaat = getal1 - getal2;
        document.getElementById('antwoord').textContent = 'Antwoord: ' + resultaat;
    } else {
        document.getElementById('antwoord').textContent = 'Het getal is te laag';
    }
}

function vermenigvuldigen() {
    let getal1 = parseFloat(document.getElementById('getal1').value);
    let getal2 = parseFloat(document.getElementById('getal2').value);

    if (getal1 > 0 && getal2 > 0) {
        let resultaat = getal1 * getal2;
        document.getElementById('antwoord').textContent = 'Antwoord: ' + resultaat;
    } else {
        document.getElementById('antwoord').textContent = 'Het getal is te laag';
    }
}

function delen() {
    let getal1 = parseFloat(document.getElementById('getal1').value);
    let getal2 = parseFloat(document.getElementById('getal2').value);

    if (getal1 > 0 && getal2 > 0) {
        if (getal2 !== 0) {
            let resultaat = getal1 / getal2;
            document.getElementById('antwoord').textContent = 'Antwoord: ' + resultaat;
        } else {
            document.getElementById('antwoord').textContent = 'Kan niet delen door 0';
        }
    } else {
        document.getElementById('antwoord').textContent = 'Het getal is te laag';
    }
}