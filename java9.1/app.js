function showCookieWall() {
    let cookieWall = document.getElementById('cookieWall');
    cookieWall.style.display = 'flex';
}

function checkLeeftijd() {
    let leeftijdInput = document.getElementById('leeftijdInput');
    let leeftijd = parseInt(leeftijdInput.value);

    if (leeftijd >= 18) {
        window.location.href = 'https://www.example.com';
    } else {
        let teJongBericht = document.getElementById('teJongBericht');
        teJongBericht.style.display = 'block';
    }

    let cookieWall = document.getElementById('cookieWall');
    cookieWall.style.display = 'none';
}