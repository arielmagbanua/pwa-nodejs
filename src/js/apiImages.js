// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/js/service-worker.js');
    });
}

(() => {
    let photoListSection = document.querySelector('#photo-grid > ul.my-masonry-image-list');

    fetch('/api/images').then((response) => response.json())
        .then((data) => {
            const images = data.images;
            images.forEach((item) => {
                let grid = document.createElement('li');
                grid.classList.add('mdc-image-list__item');
                grid.classList.add('photo-container');

                let image = document.createElement('img');
                image.src = '/' + item.path;
                image.classList.add('mdc-image-list__image');

                let labelContainer = document.createElement('div');
                labelContainer.classList.add('mdc-image-list__supporting');
                let label = document.createElement('span');
                label.classList.add('mdc-image-list__label');
                labelContainer.appendChild(label);

                grid.appendChild(image);
                grid.appendChild(labelContainer);

                // grid.innerHTML = gridContent.trim();
                photoListSection.appendChild(grid);
            });
        });
})();