import { dumpNode } from '/js/utils/node.js';
import { onInput} from '/js/utils/input2.js';

window.addEventListener('load', () => {
    const main = document.querySelector('main');
    if (!main) {
        alert('could not find "main"');
        return;
    }


    window.addEventListener('input', onInput);
    // window.addEventListener('keydown', onKeydown);
    // window.addEventListener('keyup', onKeyup);

});
