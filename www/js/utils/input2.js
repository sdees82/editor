import { dumpNode } from "/js/utils/node.js";
import { getText, getRangePosition } from "/js/utils/range.js";

export const txtData = [];
const editor = document.querySelector('.editor');
/**
 * 
 * @param {InputEvent} evt 
 */
export const onInput = (evt) => {
    /**
     * 
     * @var {HTMLDivElement} target
     */
    const target = evt.target;
    const id = target.dataset['id'];
    convertLinesToHtml(getText(0, target));
    
    // dumpNode(target);
};


const convertLinesToHtml = (text) => {
    // 

    editor.innerHTML = "";
    const textArr = text.split(/(\S+)/).filter((n)=>n);
    console.log(textArr);
    const div = document.createElement('div');
    
    textArr.forEach((word, index) => {
        word.split(' ').reverse();
        console.log(word);
        const span = document.createElement('span');
        span.setAttribute('class', 'word');
        const textNode = document.createTextNode(word);
        span.appendChild(textNode);
        div.appendChild(span);


        editor.appendChild(div);
    });
}

const convertHtmlToLines = (html) => {

}

// export const onKeydown = (evt) => {
//     window.console.log(evt);

//     dumpNode(evt.target);
//     const pos = getRangePosition(evt.target);
//     console.log(pos);
//     const txt = getText(0, evt.target);
//     console.log(`'${txt.replace(/\n/g, '\\n')}' - '${txt.slice(pos.start, pos.end).replace(/\n/g, '\\n')}'`);

//     // const rp = saveRangePosition(evt.target);
//     // console.log(rp);
// }

// export const onKeyup = (evt) => {
//     window.console.log(evt);
// }
