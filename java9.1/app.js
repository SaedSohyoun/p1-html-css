function showCookieWall() {
    var cookieWall = document.getElementById('cookieWall');
    cookieWall.style.display = 'flex';
}

function checkLeeftijd() {
    var leeftijdInput = document.getElementById('leeftijdInput');
    var leeftijd = parseInt(leeftijdInput.value);

    if (leeftijd >= 18) {
        window.location.href = 'https://www.example.com';
    } else {
        var teJongBericht = document.getElementById('teJongBericht');
        teJongBericht.style.display = 'block';
    }

    var cookieWall = document.getElementById('cookieWall');
    cookieWall.style.display = 'none';
}