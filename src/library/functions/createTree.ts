/**
 *  @param { object } items Data acquired in the background
 *  @param { * } id id in data
 *  @param { * } link The basis of generating tree structure
 */
export const createTree = (items: any, id = null, link = 'pid') => {
    return items.filter((item: any) => item[link] === id).map((item: any) => ({
        ...item,
        children: createTree(items, item.id)
    }));
};