window.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.cooking-video');

    video.addEventListener('click', function () {
        if (video.classList.contains('ready')) {
            return;
        }

        video.classList.add('ready');
        video.insertAdjacentHTML('afterbegin','<iframe class="cooking-media" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    });
});