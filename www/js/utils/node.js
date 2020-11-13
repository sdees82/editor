/**
 * 
 * @param {Node} node 
 */
export const dumpNode = (root, name, depth, line) => {
    depth = depth || 0;
    line = line || 0;

    if (name) {
        console.log(`${name}:`);
    }

    /**
     * 
     * @var {Node} node
     */
    let node = root.firstChild;
    const indent = ' '.repeat((1 + depth) * 4);
    while (node) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                console.log(`${line + 1}: ${indent}${node.nodeName}`);
                switch (node.nodeName) {
                    default:
                        const v = dumpNode(node, undefined, depth + 1, line);
                        break;

                    case "DIV":
                        dumpNode(node, undefined, depth + 1, line);
                        if (depth == 0) {
                            line++;
                        }
                        break;

                    case "BR":
                        if (depth == 0) {
                            line++;
                        }
                        break;
                }
                break;

            case Node.TEXT_NODE:
                /**
                 * 
                 * @var {Text} node
                 */
                console.log(`${line + 1}: ${indent}"${node.nodeValue}"`);
                break;
        }
        node = node.nextSibling;
    }
}
