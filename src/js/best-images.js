import { MDCDialog } from '@material/dialog';

(() => {
    const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

    dialog.listen('MDCDialog:opened', () => {
        console.log('Dialog!');
    });

    var photoContainers = document.getElementsByClassName('photo-container');

    Array.from(photoContainers).forEach((container) => {
        container.addEventListener('click', (event) => {
            console.log(event);

            dialog.open();
        });
      });
})();