import { MDCDialog } from '@material/dialog';

(() => {
    const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

    dialog.listen('MDCDialog:opened', () => {
        console.log('Dialog!');
    });
})();