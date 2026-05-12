export function fibs(n) {
    if (n === 1) return [0];
    else if (n === 2) return [0, 1];
    const results = [0, 1];
    for (let i = 2; i < n; i++) {
        let num = results[i - 1] + results[i - 2];
        results.push(num);
    }
    return results;
}

export function fibsRec(n) {
    if (n === 1) return [0];
    else if (n === 2) return [0, 1];
    return fibsRecAux(n);
}
function fibsRecAux(n, results = [0, 1]) {
    const lastNum = results[results.length - 1];
    const secondLastNum = results[results.length - 2];
    const newLastNum = lastNum + secondLastNum;
    results.push(newLastNum);
    if (results.length !== n) fibsRecAux(n, results);
    return results;
}
