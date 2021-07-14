import {foreachTree} from "./foreachTree";

export function traceParentNode(pid: any, data: any[], rootPid: any, pidName = 'parentId', idName = 'id', childrenName = 'children') {
    let arr: any[] = [];
    foreachTree(data, childrenName, (node: any) => {
        if (node[idName] == pid) {
            arr.push(node);
            if (node[pidName] != rootPid) {
                arr = arr.concat(traceParentNode(node[pidName], data, rootPid, pidName, idName));
            }
        }
    });
    return arr;
}