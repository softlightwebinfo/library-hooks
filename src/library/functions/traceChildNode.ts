import {foreachTree} from "./foreachTree";

export function traceChildNode(id: string, data: any[], pidName = 'parentId', idName = 'id', childrenName = 'children') {
    let arr: any[] = [];
    foreachTree(data, childrenName, (node: any) => {
        if (node[pidName] == id) {
            arr.push(node);
            arr = arr.concat(traceChildNode(node[idName], data, pidName, idName, childrenName));
        }
    });
    return arr;
}