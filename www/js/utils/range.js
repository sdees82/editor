const getNodeIndex = (n) => {
    let i = 0;
    while (n = n.previousSibling)
        i++;
    return i;
}

export const getText = (depth, prev) => {
    if (prev.nodeType == Node.TEXT_NODE) {
        // console.log(` ${depth} - prev='${prev.nodeValue}' (${prev.nodeValue.length} chars)`);
        return prev.nodeValue;
    }

    if (prev.nodeType != Node.ELEMENT_NODE) {
        return "";
    }

    // console.log(` ${depth} - prev=${prev.nodeName}`);

    let msg = "", lastBR = false;
    for (let node = prev.firstChild; node; node = node.nextSibling) {
        if (node.nodeName === "BR") {
            msg += "\n";
            lastBR = true;
        } else {
            msg += getText(depth + 1, node);
            lastBR = false;
        }
    }
    if (prev.nodeName === "DIV") {
        if (!lastBR) {
            msg += "\n";
        }
    } else if (prev.nodeName === "BR") {
        msg += "\n";
    }

    return msg;
}

const getIndex = (editor, node, offset) => {
    // console.log(`getIndex: %o ${offset}`, node);
    if (node === editor) {
        return offset;
    }
    let msg = "";
    for (let prev = node.previousSibling; prev; prev = prev.previousSibling) {
        msg = getText(0, prev) + msg;
    }
    const newOffset = offset + msg.length;
    const msg2 = getText(0, node);
    // console.log(` - offset=${newOffset}, msg='${msg}' msg2='${msg2.slice(0, offset)}'`);
    return getIndex(editor, node.parentNode, newOffset);
}

export const getRangePosition = (editor) => {
    const selection = window.getSelection();
    console.log(selection);
    if (selection.rangeCount !== 1)
        return null;

    const range = selection.getRangeAt(0);
    console.log(range);

    for (let c = range.startContainer; c !== editor; c = c.parentNode) {
        if (c == document.body)
            return null;
    }

    for (let c = range.endContainer; c !== editor; c = c.parentNode) {
        if (c == document.body)
            return null;
    }

    // console.log('getRangePosition:')
    return {
        start: getIndex(editor, range.startContainer, range.startOffset),
        end: getIndex(editor, range.endContainer, range.endOffset),
    }
}
