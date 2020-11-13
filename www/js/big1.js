import { dumpNode } from '/js/utils/node.js';
import { onInput, onKeydown, onKeyup, txtData } from '/js/utils/input.js';

window.addEventListener('load', () => {
    const main = document.querySelector('main');
    if (!main) {
        alert('could not find "main"');
        return;
    }

    console.log(`page loaded`);

    window.addEventListener('input', onInput);
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('keyup', onKeyup);

    for (let i = 0; i < 7; i++) {
        const article = document.createElement('article');
        article.dataset['id'] = `${i}`;
        article.setAttribute('contenteditable', 'true');

        switch (i) {
            case 0:
                article.innerText = "0: Hello World";
                break;

            case 1:
                const tn0 = document.createTextNode('1: Hello');
                article.appendChild(tn0);
                const tn1 = document.createTextNode(' ');
                article.appendChild(tn1);
                const tn2 = document.createTextNode('World');
                article.appendChild(tn2);
                break;

            case 2:
                const sp3 = document.createElement('span');
                const tn3 = document.createTextNode('2: Hello');
                sp3.appendChild(tn3);
                article.appendChild(sp3);
                const tn4 = document.createTextNode(' ');
                article.appendChild(tn4);
                const tn5 = document.createTextNode('World');
                article.appendChild(tn5);
                break;

            case 3:
                const dv6 = document.createElement('div');
                const tn6 = document.createTextNode('3: Hello');
                dv6.appendChild(tn6);
                article.appendChild(dv6);
                const tn7 = document.createTextNode('World');
                article.appendChild(tn7);
                break;

            case 4:
                article.innerText = "4: Hello\nWorld";
                break;

            case 5:
                const dv8 = document.createElement('div');
                const tn8 = document.createTextNode('5: Hello');
                dv8.appendChild(tn8);
                const br8 = document.createElement('br');
                dv8.appendChild(br8);
                article.appendChild(dv8);

                const dv9 = document.createElement('div');
                const tn9 = document.createTextNode('world');
                dv9.appendChild(tn9);
                const br9 = document.createElement('br');
                dv9.appendChild(br9);
                article.appendChild(dv9);
                break;

            default:
                const m = Math.floor(Math.random() * 3) + 1;
                txtData[i] = [];
                for (let n = 0; n < m; n++) {
                    const div = document.createElement('div');
                    const val = Math.random();
                    const txt = `${i}:${n}:${val}`;

                    const sp0 = document.createElement('span');
                    sp0.innerText = `${i}`;
                    div.appendChild(sp0);

                    const tn0 = document.createTextNode(':');
                    div.appendChild(tn0);

                    const sp1 = document.createElement('span');
                    sp1.innerText = `${n}`;
                    div.appendChild(sp1);

                    const tn1 = document.createTextNode(':');
                    div.appendChild(tn1);

                    const sp2 = document.createElement('span');
                    sp2.innerText = `${val}`;
                    div.appendChild(sp2);

                    txtData[i][n] = txt;
                    article.appendChild(div);
                }
        }
        main.appendChild(article);
        dumpNode(article, `article-${i}`);
    }
});
