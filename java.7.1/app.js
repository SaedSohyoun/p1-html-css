let budget = 100;
let productPrijs = 60;

if (budget >= productPrijs) {
    let boodschap = "U heeft genoeg geld!";
    let tekstKleur = "green";
    document.getElementById('output').innerText = boodschap;
} else {
    let boodschap = "Helaas, te weinig geld";
    let tekstKleur = "red";
    document.getElementById('output').innerText = boodschap;
}
