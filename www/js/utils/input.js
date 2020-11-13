import { dumpNode } from "/js/utils/node.js";
import { getText, getRangePosition } from "/js/utils/range.js";

export const txtData = [];

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
    console.log(`input on ${id}:`);
    dumpNode(target);
};

export const onKeydown = (evt) => {
    window.console.log(evt);

    dumpNode(evt.target);
    const pos = getRangePosition(evt.target);
    console.log(pos);
    const txt = getText(0, evt.target);
    console.log(`'${txt.replace(/\n/g, '\\n')}' - '${txt.slice(pos.start, pos.end).replace(/\n/g, '\\n')}'`);

    // const rp = saveRangePosition(evt.target);
    // console.log(rp);
}

export const onKeyup = (evt) => {
    window.console.log(evt);
}
