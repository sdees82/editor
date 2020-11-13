import { onInput, onKeydown, onKeyup, txtData } from '/js/utils/input.js';

window.addEventListener('load', () => {
    const main = document.querySelector('main');
    if (!main) {
        alert('could not find "main"');
        return;
    }

    window.addEventListener('input', onInput);
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('keyup', onKeyup);

    for (let i = 0; i < 200; i++) {
        const article = document.createElement('article');
        article.dataset['id'] = `${i}`;
        article.setAttribute('contenteditable', 'true');
        const m = Math.floor(Math.random() * 3) + 1;
        txtData[i] = [];
        for (let n = 0; n < m; n++) {
            const div = document.createElement('div');
            const val = Math.random();
            const txt = `${i}:${n}:${val}`;
            txtData[i][n] = txt;
            const tnd = document.createTextNode(txt);
            div.appendChild(tnd);
            article.appendChild(div);
        }
        main.appendChild(article);
    }
});
