let openFace = document.querySelector('.open');
        let closedFace = document.querySelector('.closed');

        function toggleFaces() {
            if (closedFace.classList.contains('closed')) {
                closedFace.classList.remove('active');
                openFace.classList.add('active');
            } else {
                openFace.classList.remove('active');
                closedFace.classList.add('active');
            }
        }