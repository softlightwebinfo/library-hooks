export function getTreeData(data: any[], pid: any, pidName: string = 'parentId', idName: string = 'id', childrenName = 'children') {
    let arr = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i][pidName] == pid) {
            data[i].key = data[i][idName];
            data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);
            arr.push(data[i]);
        }
    }

    return arr;
}