document.addEventListener('DOMContentLoaded', function() {
    const films = document.querySelectorAll('.film');

    films.forEach(film => {
        film.addEventListener('click', () => {
            const details = film.querySelector('.film-details');

            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }

            films.forEach(otherFilm => {
                if (otherFilm !== film) {
                    const otherDetails = otherFilm.querySelector('.film-details');
                    otherDetails.style.display = 'none';
                }
            });
        });
    });
});
