import { MDCDialog } from '@material/dialog';

(() => {
    const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

    var photoContainers = document.getElementsByClassName('photo-container');

    Array.from(photoContainers).forEach((container) => {
        container.addEventListener('click', (event) => {
            let dialogContent = document.getElementById('image-dialog-content');

            while (dialogContent.firstChild) {
                dialogContent.removeChild(dialogContent.firstChild);
            }

            let originalSrc = event.target.src;
            const largeSrc = originalSrc.replace(/thumbnails/gi, 'large');
            const largeImage = `<img class="mdc-image-list__image" src="${largeSrc}">`;
            dialogContent.innerHTML = largeImage;
            console.log(largeSrc);
            dialog.open();
        });
      });
})();