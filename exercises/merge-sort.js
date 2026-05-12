export function mergeSort(array) { //recursive
    if (array.length < 2) return array;
    const tree = ramify(array);
    return mergeBranches(tree);
}
export function ramify(array) {
    if (array.length === 2) return [[array[0]], [array[1]]];
    return ramifyAux(array);
}
function ramifyAux(array) {
    const midPoint = Math.floor(array.length / 2);
    let leftArr = array.slice(0, midPoint);
    let rightArr = array.slice(midPoint);

    if (leftArr.length === 2) leftArr = [[leftArr[0]], [leftArr[1]]];
    else if (leftArr.length > 2) leftArr = ramifyAux(leftArr);

    if (rightArr.length === 2) rightArr = [[rightArr[0]], [rightArr[1]]];
    else if (rightArr.length > 2) rightArr = ramifyAux(rightArr);

    return [leftArr, rightArr];
}
export function merge(leftArr, rightArr, mergedArr = [], i = 0, j = 0) {
    if (leftArr[i] < rightArr[j]) {
        mergedArr.push(leftArr[i]);
        i++;
        if (!(i in leftArr) && j in rightArr) 
            mergedArr.push(...rightArr.slice(j));
    } else if (leftArr[i] === rightArr[j]) {
        mergedArr.push(leftArr[i]);
        mergedArr.push(rightArr[j]);
        i++;
        j++;
        if (!(i in leftArr) && j in rightArr) 
            mergedArr.push(...rightArr.slice(j));
        else if (!(j in rightArr) && i in leftArr) 
            mergedArr.push(...leftArr.slice(i));
    } else {
        mergedArr.push(rightArr[j]);
        j++;
        if (!(j in rightArr) && i in leftArr) {
            mergedArr.push(...leftArr.slice(i));
        }
    }
    if (mergedArr.length !== leftArr.length + rightArr.length) {
        merge(leftArr, rightArr, mergedArr, i, j);
    }
    return mergedArr;
}
export function mergeBranches(tree) {
    if (tree[0][0] instanceof Array) tree[0] = mergeBranches([...tree[0]]);
    if (tree[1][0] instanceof Array) tree[1] = mergeBranches([...tree[1]]);
    return merge(tree[0], tree[1]);
}